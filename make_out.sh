#!/bin/sh

# remove files from previous build
echo 'Deleting old files'

rm out/assets/font/*
rm -r out/assets/img/*

# copy files
echo 'Copying files to out'
mkdir -p out/assets

cp dist/js/Aether.js out
cp dist/js/Aether.js.map out
cp dist/js/Aether.js.LICENSE.txt out
cp index.html out
cp index.theme out
cp index.yml out
cp secondary.html out
cp preloader.css out
cp LICENSE out
cp README.md out
cp -r assets/font out/assets
cp -r assets/img out/assets

cd out

# disable debug mode
disable_debug() {
	sed -i 's/^\(\s*\)window\.__debug\s*=\s*true;.*/\1window\.__debug = false;/' $1
}

disable_debug index.html
disable_debug secondary.html

# replace script source
replace_script_src() {
	sed -i 's/dist\/js\/Aether\.js/\.\/Aether\.js/' $1
}

replace_script_src index.html
replace_script_src secondary.html

echo 'Finished.'
