## Why do we need docker?
To answer this question let's take the example of running a laravel application.

In order to run a laravel application on a given machine we need certain other things to be installed on the machine first. As the Laravel is a PHP framework we need PHP 7.X to be installed on the machine on which we are planning to run the laravel application. Apart from PHP 7.X we need other PHP extensions like mbstring,xml,json,mysql,curl etc. We need Composer software to install the dependency libraries for the Laravel application. So installing these things will be different based on the Operating system. It will be time taking process to do all these things again and again when ever we want to run this application on a new or different machine.

With Docker, we have to metion all these softwares and other setting in a `Dockerfile`. Once we are ready with dockerfile with one or a couple of commands our laravel application will be running. These commands will be same on any operating system.
