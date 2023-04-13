require 'sinatra'
require 'sinatra/reloader'

get '/' do
    erb :home
end

get '/result' do
    x = params[:x].to_f
    y = params[:y].to_f

    # @var: instance variable
    @result = case params[:operator]
    when '+' then x + y
    when '-' then x - y
    when '*' then x * y
    when '/' then x / y
    end

    erb :result
end
