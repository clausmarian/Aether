#!/bin/sh

# remove files from previous build
echo 'Deleting old files'
rm out/Aether.js
rm out/index.html
rm out/index.theme
rm out/LICENSE
rm out/README.md
rm out/assets/font/*
rm -r out/assets/img/*

# copy files
echo 'Copying files to out'
mkdir -p out/assets

cp dist/js/Aether.js out
cp index.html out
cp index.theme out
cp LICENSE out
cp README.md out
cp -r assets/font out/assets
cp -r assets/img out/assets

cd out

# disable debug mode
sed -i 's/^\s*window\.__debug\s*=\s*true;.*/      window\.__debug = false;/' index.html

# replace script source
sed -i 's/dist\/js\/Aether\.js/\.\/Aether\.js/' index.html

echo 'Finished.'
