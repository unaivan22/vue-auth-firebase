<template>
    <div id="Sidenav">
        <div class="row">
            <div class="col m2">
                <div class="card">
        <div class="card-image">
          <img src="../../img/download.jpeg">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
                <div class="collection demo-navigation mdl-navigation mdl-color--blue-grey-800">
                        <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
                        <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
                        <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Trash</a>
                        <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">report</i>Spam</a>
                        <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>
                        <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Updates</a>
                        <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>Promos</a>
                        <a class="collection-item mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Purchases</a>
                      </div>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
            </div>
        </div>
    </div>
</template>


<style>
    #Sidenav {
        margin-top: 10px;
    }
    /* .collection
{
  margin: 0!important;;
  padding: 0!important;
  border: 0!important;
  box-shadow: none!important;
  background: #fff;
}

.collection-item {
    box-shadow: none!important;
    background: #fff;
}

.secondary-content {
    margin: 0!important;;
  padding: 0!important;
  border: 0!important;
  box-shadow: none!important;
  background: #fff;
}

li {
    
} */

.demo-navigation {
  flex-grow: 1;
}
.demo-layout .demo-navigation .mdl-navigation__link {
  display: flex !important;
  flex-direction: row;
  align-items: center;
  color: rgba(255, 255, 255, 0.56);
  font-weight: 500;
  padding: 16px 40px;
}
.demo-layout .demo-navigation .mdl-navigation__link:hover {
  background-color: #00BCD4;
  color: #37474F;
}
.demo-navigation .mdl-navigation__link .material-icons {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.56);
  margin-right: 32px;
}



</style>