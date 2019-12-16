class Api::V1::ContactsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    hubspot_parser = HubspotParser.new
    hubspot_parser.send(params[:contact][:name], params[:contact][:email], params[:contact][:company], params[:contact][:product])
  end
end
