<?

phpinfo();

/*
$variable_name = 'DB_NAME'; // Change this to the variable you want to check

// Retrieve the environment variable
$variable_value = getenv($variable_name);

// Check if the environment variable is set
if ($variable_value !== false) {
    echo "$variable_name: $variable_value";
} else {
    echo "$variable_name is not set.";
}
*/
echo Config::DB_NAME();

