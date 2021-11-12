export default [
  {
    condition: word => word[0] === '*',
    modify: word => ({ class: 'hero', text: word.substr(1) })
  },
  {
    condition: word => word[0] === '@',
    modify: word => ({ class: 'outline', text: word.substr(1) })
  },
  {
    condition: word => word[0] === '-',
    modify: word => ({ class: 'small', text: word.substr(1) })
  },
  {
    condition: word => word[0] === '~',
    modify: word => ({ class: 'nope', text: word.substr(1) })
  },
  {
    condition: word => word[0] === '.',
    modify: word => ({ class: '', text: word.substr(1) })
  },
  {
    condition: word => true,
    modify: word => ({ class: '', text: word })
  },
]
