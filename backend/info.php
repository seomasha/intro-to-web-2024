<?

phpinfo();

echo "TEST";
echo Config::DB_HOST();
echo Config::DB_NAME();
echo Config::DB_PASSWORD();
echo Config::DB_PORT();
echo Config::DB_USER();
echo Config::JWT_SECRET();

echo Config::get_env("JWT_SECRET", "testiranje");