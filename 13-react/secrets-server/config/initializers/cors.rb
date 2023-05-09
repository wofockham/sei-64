# Lifted from: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins '*' # this needs to be an explicit list of URLs for Heroku
        resource '*',
            :headers => :any,
            :methods => %i( get post put patch delete options head )
    end
end