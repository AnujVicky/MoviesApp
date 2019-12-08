module MoviesHelper
  def getData(id)
  uri = URI.parse("http://www.omdbapi.com/?apikey=#{ENV["api_key"]}&i=#{id}")
  request = Net::HTTP::Get.new(uri)
  request["Connection"] = "keep-alive"
  request["Pragma"] = "no-cache"
  request["Cache-Control"] = "no-cache"
  request["Dnt"] = "1"
  request["Upgrade-Insecure-Requests"] = "1"
  request["User-Agent"] = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36"
  request["Accept"] = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3"
  request["Accept-Language"] = "en-GB,en-US;q=0.9,en;q=0.8"
  request["Cookie"] = "__cfduid=dc5b5a3adc2ac8449fbe9d0d771a242a01575380968; _ga=GA1.2.989180829.1575380969; _gid=GA1.2.418581862.1575480617"

  req_options = {
    use_ssl: uri.scheme == "https",
    verify_mode: OpenSSL::SSL::VERIFY_NONE,
  }

  response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
    http.request(request)
     #obj = JSON.parse(response.body.first)
  end
  @mov_data = JSON.parse(response.body)
end
end
