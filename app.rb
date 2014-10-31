require 'sinatra'

get '/' do
  redirect '/index.html'
end

get '/room/:room' do |room|
  redirect "/resources/#{room}.png"
end

get '/agent' do
    "you're using #{request.user_agent}"
end
