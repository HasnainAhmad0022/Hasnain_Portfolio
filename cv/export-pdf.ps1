# Exports cv/Hasnain_Ahmad_CV.docx to PDF with the installed Word-compatible
# engine (WPS Office or Microsoft Word via COM), so both files share one layout.
# Then copies the PDF into public/ for the portfolio's "Download CV" button.
$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$docx = Join-Path $here 'Hasnain_Ahmad_CV.docx'
$pdf  = Join-Path $here 'Hasnain_Ahmad_CV.pdf'
$app = $null
foreach ($progId in 'Word.Application', 'KWps.Application') {
  try { $app = New-Object -ComObject $progId; break } catch {}
}
if (-not $app) { throw 'No Word-compatible COM engine (Microsoft Word or WPS Office) found.' }
try {

  $doc = $app.Documents.Open($docx)
  $doc.ExportAsFixedFormat($pdf, 17)   # 17 = wdExportFormatPDF
  $doc.Close($false)
} finally { try { $app.Quit() | Out-Null } catch {} }
Copy-Item $pdf (Join-Path $here '..\public\Hasnain_Ahmad_CV.pdf') -Force
Write-Host "Wrote $pdf (and copied to public/)"
