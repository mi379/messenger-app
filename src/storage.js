import {writable} from 'svelte/store'

var _localStorage = JSON.parse(
  localStorage.getItem(
  	'state'
  )
)

export  default writable(
  _localStorage || {
  	login: false,
  	info:null
  }
)
