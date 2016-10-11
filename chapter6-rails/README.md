#### Setup

```
bundle install
cp config/database.yml.postgresqlapp config/database.yml
rake setup
bundle exec rails server
```

#### In Mac OSX
```
gem uninstall nokogiri  
brew install libxml2 libxslt libiconv  
NOKOGIRI_USE_SYSTEM_LIBRARIES=1 gem install nokogiri -v '1.6.6.2' -- --use-system-libraries --with-iconv-dir="$(brew --prefix libiconv)" --with-xml2-config="$(brew --prefix libxml2)/bin/xml2-config" --with-xslt-config="$(brew --prefix libxslt)/bin/xslt-config"  
```

** you may need to re-init the database directory ** 
rm -rf /usr/local/var/postgres && initdb /usr/local/var/postgres -E utf8  

#### Replace Search with your project name

Let's say that the project name is `Pump`. Execute the command below to
replace all occurrences of `Search` with `Pump`.

```
 perl -e "s/Search/Pump/g;" -pi $(find . -type f)
```

#### Features

- Uses [Bootstrap](http://getbootstrap.com) .
- rake setup to set sensible sample data including user `sam@example.com` with password `welcome`.
- Uses [devise](https://github.com/plataformatec/devise) .
- Heroku ready. Push to heroku and it will work .
- Uses [honeybadger](https://www.honeybadger.io).
- Built in superadmin feature.
- Uses modal box to showcase an example of editing information using modal box.
- Enables __strict mode__ for all JavaScript code.
- Uses __unicorn__ for staging and production.
- Uses __thin__ for development and test.
- An orange ribbon at the top for non-production environment.
- Uses haml for cleaner syntax over erb.
- No coffeescript. We prefer JavaScript.
- No turbo-link.
- Uses [ActiveAdmin](http://activeadmin.info) : (admin@example.com|password).
- When exception is sent to honeybadger then uuid is also sent for [debugging](http://videos.bigbinary.com/rubyonrails/use-uuid-x-request-id-to-debug-rails-application.html) .
- Uses [DelayedJob](https://github.com/collectiveidea/delayed_job).
- Intercepts all outgoing emails in non production environment using gem [mail_interceptor](https://github.com/bigbinary/mail_interceptor).
- Uses [CircleCI](https://circleci.com) for continuous testing.
- Has a bunch of tests to make it easier to get started with new tests.
- Uses PostgreSQL.
- Built in support for [carrierwave](https://github.com/carrierwaveuploader/carrierwave) to easily upload items to s3.
- Built in support for "variants" so the pages can be customized for tablet or phone easily.
- Uses [simple_form](https://github.com/plataformatec/simple_form).
- Built in support for [mandrill](http://how-we-work.bigbinary.com/externalservices/mandrill.html).
- Easy to generate "test coverage".
- Content compression via [Rack::Deflater](https://github.com/rack/rack/blob/master/lib/rack/deflater.rb).


#### Contact us

[![Agiletech logo](http://agiletech.vn/wp-content/uploads/2013/09/thanh-tu-pham_1-350x350.jpg)](http://agiletech.vn/)
