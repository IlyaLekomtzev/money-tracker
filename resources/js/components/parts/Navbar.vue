<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
           <b-container>
               <b-navbar-brand to="/">Money tracker</b-navbar-brand>

               <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

               <b-collapse id="nav-collapse" is-nav>
                   <b-navbar-nav>
                       <b-nav-item to="/balance">Баланс</b-nav-item>
                       <b-nav-item to="/add">Добавить</b-nav-item>
                   </b-navbar-nav>
               </b-collapse>
           </b-container>
        </b-navbar>
    </div>
</template>
