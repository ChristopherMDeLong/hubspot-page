require 'json'
require 'optparse'
require 'http'

API_HOST = 'https://forms.hubspot.com'
SEARCH_PATH = '/uploads/form/v2/6860623/f316a3ec-d703-469d-a671-9fba4d827f1e'

class HubspotParser
  def send(name, email, company, product)
    url = "#{API_HOST}#{SEARCH_PATH}"
    postData = {
      name: name,
      email: email,
      company: company,
      product: product,
    }
    req = HTTP.post(url, params: postData)
  end
end
