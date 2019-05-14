# 基于egg的博客后端接口api

222

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```
            <site name="Default Web Site" id="1">  
                <application path="/">
                    <virtualDirectory path="/" physicalPath="%SystemDrive%\inetpub\wwwroot" />
                </application>
                <application path="/SHWY.EPBPDataSyncServices" applicationPool="DefaultAppPool">
                    <virtualDirectory path="/" physicalPath="F:\我的项目\河南EPBP数据对接\3.codes\EpbpDataAcqService" />
                </application>
                <bindings>
                    <binding protocol="net.tcp" bindingInformation="808:*" />
                    <binding protocol="net.pipe" bindingInformation="*" />
                    <binding protocol="net.msmq" bindingInformation="localhost" />
                    <binding protocol="msmq.formatname" bindingInformation="localhost" />
                    <binding protocol="http" bindingInformation="*:80:" />
                </bindings>
            </site>
### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
