a = 0

init = -> a = 1

incr = -> a = a + 1

init

console.log "a before incr: #{a}"

incr

console.log "a after incr: #{a}"