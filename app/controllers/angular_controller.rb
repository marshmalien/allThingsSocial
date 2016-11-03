class AngularController < ApplicationController
  def index
    render 'layouts/application'
  end

  def homepage
    render 'layouts/homepage'
  end
end
