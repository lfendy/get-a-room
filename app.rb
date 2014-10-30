require 'sinatra'

get '/' do
  # redirect to index.html
    File.read(File.join('static', 'index.html'))
end

get '/petar' do
  # redirect to index.html
    File.read(File.join('static', 'petar.html'))
end

get '/static' do
  # serve stuff from /static
end

get '/agent' do
    "you're using #{request.user_agent}"
end
