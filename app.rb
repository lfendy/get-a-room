require 'sinatra'

get '/' do
  redirect '/index.html'
end

get '/agent' do
    "you're using #{request.user_agent}"
end
