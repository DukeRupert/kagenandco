# Copy this file to any directory containing images & then run this script in powershell
# Get all png images in the current directory & convert it to webp format
$images = Get-ChildItem -Path (Get-Location) -Filter *.jpeg
foreach ($image in $images) {
    $fileName = $image.DirectoryName + "\" + $image.BaseName + ".webp"
    cwebp -q 80 $image.FullName -o $fileName
}