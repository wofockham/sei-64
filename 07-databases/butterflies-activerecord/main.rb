require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Tedious configuration: tomorrow Rails will do this for you
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models: a class that is backed by a database table
class Butterfly < ActiveRecord::Base
    belongs_to :plant, :optional => true
end

class Plant < ActiveRecord::Base
    has_many :butterflies
end

get '/' do
    erb :home
end

# INDEX
# Show you all the butterflies
get '/butterflies' do
    @butterflies = Butterfly.all
    erb :butterflies_index
end

# NEW
# Blank form for a new butterfly
get '/butterflies/new' do
    erb :butterflies_new
end

# CREATE
# Insert the user's form data into the database
post '/butterflies' do
    butterfly = Butterfly.new
    butterfly.name = params[:name]
    butterfly.family = params[:family]
    butterfly.image = params[:image]
    butterfly.plant_id = params[:plant_id]
    butterfly.save
    redirect to("/butterflies/#{ butterfly.id }")
end

# SHOW
# Show a single butterfly
get '/butterflies/:id' do
    @butterfly = Butterfly.find params[:id]
    erb :butterflies_show
end

# EDIT
# Pre-filled form for updating a butterfly
get '/butterflies/:id/edit' do
    @butterfly = Butterfly.find params[:id]
    erb :butterflies_edit
end

# UPDATE
# Update a butterfly with the user's form data
post '/butterflies/:id' do
    butterfly = Butterfly.find params[:id]
    butterfly.name = params[:name]
    butterfly.family = params[:family]
    butterfly.image = params[:image]
    butterfly.plant_id = params[:plant_id]
    butterfly.save
    redirect to("/butterflies/#{ params[:id] }") # GET /butterflies/17 SHOW
end

# DESTROY
# Delete a butterfly from the database
get '/butterflies/:id/delete' do
    butterfly = Butterfly.find params[:id]
    butterfly.destroy
    redirect to('/butterflies')
end

# Plants CRUD #############################################

# INDEX
get '/plants' do
    @plants = Plant.all
    erb :plants_index
end

# NEW
get '/plants/new' do
    erb :plants_new
end

# CREATE
post '/plants' do
    plant = Plant.new
    plant.name = params[:name]
    plant.image = params[:image]
    plant.save
    redirect to("/plants/#{ plant.id }")
end

# SHOW
get '/plants/:id' do
    @plant = Plant.find params[:id]
    erb :plants_show
end

# EDIT
get '/plants/:id/edit' do
    @plant = Plant.find params[:id]
    erb :plants_edit
end

# UPDATE
post '/plants/:id' do
    plant = Plant.find params[:id]
    plant.name = params[:name]
    plant.image = params[:image]
    plant.save
    redirect to("/plants/#{ plant.id }")
end

# DESTROY
get '/plants/:id/delete' do
    plant = Plant.find params[:id]
    plant.destroy
    redirect to('/plants')
end
