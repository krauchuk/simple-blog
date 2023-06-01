import news from '../../../apiData/news'

export const getAllNewsData = () => news.sort((a, b) => b.id - a.id)

export default function handler(req, res) {
  const response = getAllNewsData()

  return res.status(200).json(response)
}
