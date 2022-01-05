---
layout: post
title: Epic Games Unicorn
date: 2021-12-13 18:24:00
cover: https://pic3.zhimg.com/v2-06c679362f9e3c3e9f84ae5dbf5752c1_b.webp
category: O
---

# epic-games-unicorn

If you can’t see the members of a specific organization, Just like this:

![unicorn](/assets/img/20211213/unicorn.png)

Because true people number is:

![tnum](/assets/img/20211213/tnum.png)

then what we can see max number is:

![fnum](/assets/img/20211213/fnum.png)

The problem is that GitHub can't show such a large list of member, **but** only other people in the organization can see the organization logo on the homepage of the people in the same organization.

So, you can replace ```{{}}``` with your information and run this command and make your account visibility becomes **PUBLIC**.

```shell
curl -H "Accept: application/vnd.github.v3+json" \
-H "Authorization: token {{your personal access tokens(E.g. ghp_xxx...xxx)}}" \
-H "Content-Length: 0" \
-X PUT \
https://api.github.com/orgs/EpicGames/public_members/{{your username of GitHub}}
```

Reference:   
- [https://github.community/t/unicorn-i-cant-see-the-members-of-a-specific-organization/2180/16](https://github.community/t/unicorn-i-cant-see-the-members-of-a-specific-organization/2180/16)  
- [https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)  
