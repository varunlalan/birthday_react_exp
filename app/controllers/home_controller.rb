class HomeController < ApplicationController
  def index
    @results = Birthday.all.as_json
  end
end
