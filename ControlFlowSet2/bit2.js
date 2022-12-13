function brooklynTech(num)
{
    if(isNaN(num))
    {
        return "Not a number";
    }
    if ((num % 3 == 0) && (num % 5 == 0))
    {
        return "Brooklyn Tech";
    }
    if (num % 3 == 0)
    {
        return "Brooklyn";
    }
    if (num % 5 == 0)
    {
        return "Tech";
    }

    if ((num % 3 != 0) && (num % 5 != 0))
    {
        return num;
    }
}

brooklynTech(6);
brooklynTech(10);
brooklynTech(15);
brooklynTech(4);
brooklynTech("test");