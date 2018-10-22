// Set DNS Records for devbox
setDNS    dev-apengh-1.monetate.org  54.160.155.178
setDNS    b.monetate.net  54.160.155.178
setDNS    sb.monetate.net 54.160.155.178
setDNS    d.monetate.net  54.160.155.178
setDNS    sd.monetate.net 54.160.155.178
setDNS    e.monetate.net  54.160.155.178
setDNS    se.monetate.net 54.160.155.178
setDNS    f.monetate.net  54.160.155.178
setDNS    sf.monetate.net 54.160.155.178

// Navigate to homepage
navigate  https://dev-apengh-1.monetate.org/control/preview/1061/13QSHHGWB5K24G4PUIMVKTONH9IJQCTT/181002-ios

// Log in
setValue    name=userid                 PDoe2345
setValue    name=passwordPlaceholder    Caremark12
submitForm  name=login_form
