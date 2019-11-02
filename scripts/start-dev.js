#!/usr/bin/env node
let join = require('path').join;
let electron = require('electron');
let spawn = require('child_process').spawn;

const main = join(__dirname, '../dist/browser/main.js');

spawn(electron, [main], {
  command: electron,
  args: [main],
  stdio: 'inherit'
});