import news from '../../../apiData/news'

export const getNewsById = id => news.find(n => n.id === parseInt(id))

export default function handler(req, res) {
  const {
    query: { id },
  } = req

  const data = getNewsById(id)

  if (data) return res.status(200).json(data)

  return res.status(404).json({
    status: 404,
    message: 'Not Found',
  })
}
