require 'sinatra'

get '/' do
  'Hello Docker'
end

set :bind => "0.0.0.0"
