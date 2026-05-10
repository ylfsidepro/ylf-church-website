import { google } from 'googleapis'
import type { ConnectFormData } from '@/types'

/**
 * Appends a connect-form submission to the configured Google Sheet.
 * Columns: Name | Location | Contact Number | Prayer Request | Date & Time
 *
 * This function is SERVER-SIDE ONLY — never import it in client components.
 * Credentials come exclusively from environment variables.
 */
export async function appendToSheet(data: ConnectFormData): Promise<void> {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL
  const privateKey  = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const sheetId     = process.env.GOOGLE_SHEET_ID

  if (!clientEmail || !privateKey || !sheetId) {
    throw new Error(
      'Missing Google Sheets credentials. ' +
      'Set GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY and GOOGLE_SHEET_ID in .env.local'
    )
  }

  // Authenticate with Service Account
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key:  privateKey,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  // Timestamp in IST
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  await sheets.spreadsheets.values.append({
    spreadsheetId:   sheetId,
    range:           'Sheet1!A:E',
    valueInputOption:'USER_ENTERED',
    requestBody: {
      values: [[
        data.name,
        data.location,
        data.contact,
        data.prayerRequest ?? '',
        timestamp,
      ]],
    },
  })
}
