/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': '💣',
    'I': '🎁',
    'PLAYER': '💀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'HEART':'❤️',
  };
  
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `)

  maps.push(`
    OXXXXXXXXX
    -----X--XXX
    XXX-XX--XXX
    XX--------XX
    X--XXXX-XXXX
    X-----XXXXX
    XX--X--XXXXX
    XXX-X-I--X
    XXXXXXXXXXX`
  )

  maps.push(`
    -XXXXX----
    ------X-X-
    X--XX-XX--
    -X-XX-X-XX
    X-----X-X-
    --XXOXXX-X
    --XXX-----
    --XX----X-
    --XX--XI--
    ------XX--
    X-XX--X-XX`
  )

  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X---XX-XXX
    XX--XX--XX
    XX--XXX-XX
    XX-----IXX
    XXXXXXXXXX`
  )