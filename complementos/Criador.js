let  handler  =  function  ( m )  {
  esto . sendContact ( m . chat ,  '593992390339' ,  'Nurutomo' ,  m )
}
manejador . help  =  [ 'propietario' ,  'creador' ]
manejador . etiquetas  =  [ 'información' ]

manejador . comando  =  / ^ ( propietario | creador ) $ / i

módulo . exportaciones  =  manejador
