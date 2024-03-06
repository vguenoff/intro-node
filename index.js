#!/usr/bin/env node
// @ts-check

const note = process.argv[2]
const newNote = {
  id: Date.now(),
  content: note,
}

console.log(newNote)
