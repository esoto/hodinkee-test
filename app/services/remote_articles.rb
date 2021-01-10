require 'open-uri'

class RemoteArticles
  URL = 'http://newsapi.org/v2/top-headlines?'\
    'country=us&'\
    'apiKey=28cb6243577f4a33b952454034008986'

  def self.get_articles
    req = open(URL)
    JSON.parse(req.read)['articles']
  end
end
