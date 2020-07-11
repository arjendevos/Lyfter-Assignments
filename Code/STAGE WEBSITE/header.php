<header>
    <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class='container-fluid'>
            <a class="navbar-brand" href="./index.php"><div class="logoImg" ></div></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarResponsive">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="<?php if(basename($_SERVER['SCRIPT_NAME']) == 'overons.php'){echo 'nav-link current'; }else { echo 'nav-link'; } ?>" href="./overons.php">Over Ons</a>
                    </li>
                    <li class="nav-item">
                    <a class="<?php if(basename($_SERVER['SCRIPT_NAME']) == 'expertise.php'){echo 'nav-link current'; }else { echo 'nav-link'; } ?>" href="./expertise.php">Expertise</a>
                    </li>
                    <li class="nav-item">
                        <a class="<?php if(basename($_SERVER['SCRIPT_NAME']) == 'referenties.php'){echo 'nav-link current'; }else { echo 'nav-link'; } ?>" href="">Referenties</a>
                    </li>
                    <li class="nav-item">
                        <a class="<?php if(basename($_SERVER['SCRIPT_NAME']) == 'actueel.php'){echo 'nav-link current'; }else { echo 'nav-link'; } ?>" href="">Actueel</a>
                    </li>
                    <li class="nav-item">
                        <a class="<?php if(basename($_SERVER['SCRIPT_NAME']) == 'contact.php'){echo 'nav-link current'; }else { echo 'nav-link'; } ?>" href="./contact.php">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
</header>