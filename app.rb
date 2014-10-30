require 'sinatra'

get '/' do
    File.read(File.join('static', 'index.html'))
end

get '/agent' do
    "you're using #{request.user_agent}"
end
