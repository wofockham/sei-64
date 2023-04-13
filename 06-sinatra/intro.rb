require 'sinatra'
require 'sinatra/reloader' # provided care of sinatra-contrib

get '/' do
    "Hello World from the home page AKA root page AUTOMATIC RESTART ON SAVE"
end

get '/hello' do
    "Hello Cruel World from Sinatra"
end

get '/goodbye' do
    "Goodbye Cruel World from Sinatra"
end

# Dynamic content
get '/lucky' do
    "Here is your lucky number #{ rand 1..40 }"
end

get '/uptime' do
    "The server uptime is #{ `uptime` }"
end

# Dynamic URLs

# Marx Brothers Fanclub

# Dynamic: Infinite number of names could appear in the URLs here
# $500
get '/fanclub/:name' do
    "#{ params[:name].capitalize } is a proud member of the Marx Brothers Fanclub"
end

# $700
get '/fanclub/:first/:last' do
    "#{ params[:first].capitalize } #{ params[:last].upcase } is a premium member of the Marx Brother Fanclub"
end

# $1000
get '/fanclub/:first/:last/:favorite' do
    "#{ params[:first].capitalize } #{ params[:last].upcase } is a platinum member of the Marx Brother Fanclub. Their favorite Marx Brother is #{ params[:favorite] }"
end

# Second crappiest calculator of the course
get '/multiply/:x/:y' do
    result = params[:x].to_f * params[:y].to_f
    "The result is <strong>#{ result }"
end

# TWO SERIOUS COMPLAINTS
# If this is a web server, where is the goddamn HTML?
