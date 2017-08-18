redis_url = ENV['REDISTOGO_URL'] || 'redis://localhost:6379'
p 'Sidekiq initializer'
p 'Redis URL => ' + redis_url

Sidekiq.configure_server do |config|
  config.redis = {url: redis_url}
end

Sidekiq.configure_client do |config|
  config.redis = {url: redis_url}
end
