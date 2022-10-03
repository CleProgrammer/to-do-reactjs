import React, { useEffect, useState } from 'react'

export default {
  dataTask: (e) => {
    return [
      {task: 'Ir comprar pão',
      id: 't001',
      status: 'disabled'},
      {task: 'Passear com o cachorro',
      id: 't002',
      status: 'disabled'},
      {task: 'Fazer exercícios',
      id: 't003',
      status: 'disabled'},
      {task: `${e}`,
      id: 't004'}
    ]
  }
}
