# DateTime Arrays

So I found that when passing date only or time only values around in JSON, there wasn't a great format to do so. In order to keep the payload size small when passing around a lot of these, I tend to use arrays. This is a library for dealing with them.

Everything here is assumed local time, there is no offset or time zone information recorded or managed.
