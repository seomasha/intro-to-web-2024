<?

phpinfo();

$variable_name = 'DB_NAME'; // Change this to the variable you want to check

// Retrieve the environment variable
$variable_value = getenv($variable_name);

// Check if the environment variable is set
if ($variable_value !== false) {
    echo "$variable_name: $variable_value";
} else {
    echo "$variable_name is not set.";
}

echo "TEST";
echo Config::DB_HOST();
echo Config::DB_NAME();
echo Config::DB_PASSWORD();
echo Config::DB_PORT();
echo Config::DB_USER();
echo Config::JWT_SECRET();

echo Config::get_env("JWT_SECRET", "testiranje");
echo getenv("DB_NAME");
