<script lang="ts">
    import Rule from "./Rule.svelte";

    let userAccountRules = [
        `
            When You create an account with Us, You must provide Us information that is accurate, complete, and
            current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
            termination of Your account on Our Service.
        `,
        `
            You are responsible for safeguarding the password that You use to access the Service and for any activities
            or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media
            Service.
        `,
        `
            You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming
            aware of any breach of security or unauthorized use of Your account.
        `
    ];

    let changesToTOS: string[] = [
        `
            We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is
            material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at Our sole discretion.,
        `,
        `
            By continuing to access or use Our Service after those revisions become effective, You agree to be bound
            by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the
            website and the Service.
        `
    ];

    let termination: string[] = [
        `
            We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if You breach these Terms and Conditions.
        `,
        `
            Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your
            Account, You may simply discontinue using the Service.
        `
    ];

    let orderCancellation: string[] = [
        `
            We reserve the right to refuse or cancel Your Order at any time for certain reasons including but not limited
            to: Products availability, Errors in the description or prices for Products, Errors in Your Order.
        `,
        `
            We reserve the right to refuse or cancel Your Order if fraud or an unauthorized or illegal transaction is
            suspected.
        `
    ];

    let inaccuracies: string[] = [
        `
            We are constantly updating Our offerings of Products on the Service. The Products available on Our
            Service may be mispriced, described inaccurately, or unavailable, and We may experience delays in
            updating information regarding our Products on the Service and in Our advertising on other websites.
        `,
        `
            We cannot and do not guarantee the accuracy or completeness of any information, including prices,
            product images, specifications, availability, and services. We reserve the right to change or update
            information and to correct errors, inaccuracies, or omissions at any time without prior notice.
        `
    ];

    let yourInformation: string[] = [
        `
            If You wish to place an Order for Products available on the Service, You may be asked to supply certain
            information relevant to Your Order including, without limitation, Your name, Your email, Your phone number,
            Your credit card number, the expiration date of Your credit card, Your billing address, and Your shipping
            information.
        `,
        `
            You represent and warrant that: (i) You have the legal right to use any credit or debit card(s) or other
            payment method(s) in connection with any Order; and that (ii) the information You supply to us is true,
            correct and complete.
        `,
        `
            By submitting such information, You grant us the right to provide the information to payment processing
            third parties for purposes of facilitating the completion of Your Order.
        `
    ];
</script>

<svelte:head>
    <title>Terms and Conditions</title>
</svelte:head>

<section>
    <div class="flex flex-col gap-10 mx-auto max-w-[1279px] px-10" >
        <div class="flex flex-col gap-2">
            <h1 class="font-semibold text-3xl">Terms and Conditions</h1>
            <p class="text-zinc-300" >Please read these terms and conditions carefully before using Our Service.</p>
        </div>

        <div class="flex flex-col gap-16" >
            <Rule 
                title = "User Account"
                rules = {userAccountRules}
            />

            <Rule 
                title = "Termination"
                rules = {termination}
            />

            <Rule 
                title = "Order Cancellation"
                rules = {orderCancellation}
            />

            <Rule 
                title = "Availability, Errors and Inaccuracies"
                rules = {inaccuracies}
            />

            <Rule 
                title = "Your Information"
                rules = {yourInformation}
            />

            <Rule 
                title = "Changes to Terms and Conditions"
                rules = {changesToTOS}
            />
        </div>
    </div>
</section>