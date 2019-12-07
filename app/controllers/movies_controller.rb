class MoviesController < ApplicationController
require 'net/http'
require 'uri'
require 'openssl'
  def show
uri = URI.parse("http://www.omdbapi.com/?i=tt3896198&apikey=a1512c13")
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
@api_projects = JSON.parse(response.body)
#raise @api_projects.inspect

  end

  def top_menus
    #raise params.inspect
  end

  def favourite_moives_list
 #raise params.inspect
end

  def movies_master
  end
    def movies_master_list
      @ind = params[:ind]
      uri = URI.parse("http://www.omdbapi.com/?apikey=a1512c13&t=#{params[:title]}")
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
      end
      @movies_list = JSON.parse(response.body)
      #raise @master_data.inspect
    end

    def latest_movie_create
      for key in params[:movies_list].keys
        if !params[:movies_list][key][:title].blank?
        movie =  Movie.new
        movie.imdbID = params[:movies_list][key][:imdbID]
        movie.title = params[:movies_list][key][:title]
        movie.year = params[:movies_list][key][:year]
      status =  movie.save!
        end
      end
      #raise movie.inspect
      if status
      redirect_to :action =>'top_menus'
      end
    end
  def new
  end

  def edit
  end

  def list
  end
end
