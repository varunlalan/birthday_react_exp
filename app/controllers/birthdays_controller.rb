class BirthdaysController < ApplicationController
  def index
    Birthday.all.as_json
  end

  def create
    birthday = Birthday.create(birthday_params)
    render json: birthday.as_json
  end

  private

  def birthday_params
    params[:birthday].permit(:name, :birthdate)
  end
end
