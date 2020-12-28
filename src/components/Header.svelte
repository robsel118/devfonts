<script>
    import GitHub from "carbon-icons-svelte/lib/LogoGithub32";
</script>

<style lang="scss">
    .flex{
        display: flex;   
    }

    .items-end{
        align-items: flex-end;
    }

    .justify-between{
        justify-content: space-between;
    }
    .row{
        flex-direction: row;
    }
    h1{
        font-size: 2rem;
    }

    .col{
        flex-direction: column;
    }

</style>

<header class="flex row justify-between items-end">
    <div class="flex col">
        <h1>DevFonts</h1>
        <p>By robsel118</p>
    </div>
    <a
        href="https://github.com/robsel118/devfonts"
        target="_blank"
        rel="noopener"
        ref="noreferrer"><GitHub /></a>
</header>
