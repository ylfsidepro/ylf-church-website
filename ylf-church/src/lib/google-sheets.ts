import { google } from 'googleapis'
import type { ConnectFormData } from '@/types'

/**
 * Google Sheets Helper
 * --------------------------------------------------
 * Appends submissions ABOVE summary statistics
 */

export async function appendToSheet(
  data: ConnectFormData
): Promise<void> {
  // ─────────────────────────────────────────────
  // Environment Variables
  // ─────────────────────────────────────────────
  const clientEmail =
    process.env.GOOGLE_CLIENT_EMAIL

  const rawPrivateKey =
    process.env.GOOGLE_PRIVATE_KEY

  const sheetId =
    process.env.GOOGLE_SHEET_ID

  // ─────────────────────────────────────────────
  // Validate Env Variables
  // ─────────────────────────────────────────────
  if (
    !clientEmail ||
    !rawPrivateKey ||
    !sheetId
  ) {
    throw new Error(
      'Missing Google Sheets credentials.'
    )
  }

  // Fix multiline private key
  const privateKey =
    rawPrivateKey.replace(/\\n/g, '\n')

  // ─────────────────────────────────────────────
  // Google Auth
  // ─────────────────────────────────────────────
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },

    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  })

  // ─────────────────────────────────────────────
  // Sheets API
  // ─────────────────────────────────────────────
  const sheets = google.sheets({
    version: 'v4',
    auth,
  })

  // ─────────────────────────────────────────────
  // Timestamp
  // ─────────────────────────────────────────────
  const timestamp =
    new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    })

  // ─────────────────────────────────────────────
  // Sheet Name
  // ─────────────────────────────────────────────
  const SHEET_NAME =
    'Connect Form Submissions'

  try {
    // ─────────────────────────────────────────
    // Get Spreadsheet Metadata
    // ─────────────────────────────────────────
    const spreadsheet =
      await sheets.spreadsheets.get({
        spreadsheetId: sheetId,
      })

    // Find matching sheet
    const targetSheet =
      spreadsheet.data.sheets?.find(
        sheet =>
          sheet.properties?.title ===
          SHEET_NAME
      )

    if (!targetSheet) {
      throw new Error(
        `Sheet "${SHEET_NAME}" not found`
      )
    }

    const realSheetId =
      targetSheet.properties?.sheetId

    if (realSheetId === undefined) {
      throw new Error(
        'Could not determine sheet ID'
      )
    }

    // ─────────────────────────────────────────
    // Get Existing Rows
    // ─────────────────────────────────────────
    const existingRows =
      await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,

        range: `'${SHEET_NAME}'!A:A`,
      })

    const rows =
      existingRows.data.values || []

    // ─────────────────────────────────────────
    // Find Summary Row
    // ─────────────────────────────────────────
    const summaryRowIndex =
      rows.findIndex(
        row =>
          row[0]
            ?.toString()
            .includes('SUMMARY STATISTICS')
      )

    // Insert above summary
    const insertRow =
      summaryRowIndex > 0
        ? summaryRowIndex
        : rows.length + 1

    // ─────────────────────────────────────────
    // Insert Empty Row
    // ─────────────────────────────────────────
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId: sheetId,

      requestBody: {
        requests: [
          {
            insertDimension: {
              range: {
                sheetId: realSheetId,

                dimension: 'ROWS',

                startIndex:
                  insertRow - 1,

                endIndex: insertRow,
              },

              inheritFromBefore: true,
            },
          },
        ],
      },
    })

    // ─────────────────────────────────────────
    // Add Submission Data
    // ─────────────────────────────────────────
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,

      range: `'${SHEET_NAME}'!A${insertRow}:E${insertRow}`,

      valueInputOption: 'USER_ENTERED',

      requestBody: {
        values: [
          [
            data.name,
            data.location,
            data.contact,
            data.prayerRequest ?? '',
            timestamp,
          ],
        ],
      },
    })

    console.log(
      '✅ Submission added above summary statistics'
    )
  } catch (error) {
    console.error(
      '❌ Google Sheets append failed'
    )

    console.error(error)

    throw error
  }
}