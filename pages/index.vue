<template>
<div>
  <div class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse arbitrageHeading" style="width:100%">
      <h4>Indian Arbitrage</h4>
    </div>
    <!-- <div class="container-fluid">
      <div class="row"> -->

        <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3" style="width:100%">
          
          
          <div class="panel panel-default darkbackground" >
            <div class="panel-body centerAlign">Indian Money</div>
          </div>

          <section class="row text-center placeholders">
            <div class="col-6 col-sm-3 placeholder" style="width:100%">
              <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th >Type</th>
        <th >Value</th>
      </tr>
    </thead>
    <tbody class="table-hover table-bordered table">
      <tr>
        <td>Input (INR)</td>
        <td><input type="number" @blur="recalculate" v-model="inputInr"/></td>
      </tr>
      <tr>
        <td>Indian Bank Tax for overseas Transfer (INR)</td>
        <td>{{indianMoney.indianBankTax}}</td>
      </tr>
      <tr>
        <td>Available Money to exchange (INR)</td>
        <td>{{indianMoney.availableMoney}}</td>
      </tr>
      <tr>
        <td>Ideal Balance in Cex (EUR)</td>
        <td>{{indianMoney.inputCexRawEur}}</td>
      </tr>
      <tr>
        <td>Cex Tax (EUR)</td>
        <td>{{indianMoney.cexTaxEur}}</td>
      </tr>
      <tr>
        <td>Cex Wallet Balance (EUR)</td>
        <td>{{indianMoney.cexInputEur}}</td>
      </tr>
      <tr>
        <td>Buy Request Fee (EUR)</td>
        <td>{{indianMoney.buyRequestFee}}</td>
      </tr>
    </tbody>
  </table>
            </div>
          </section>


          <div class="panel panel-default darkbackground">
            <div class="panel-body centerAlign">BTC Buy/Transfer</div>
          </div>

          <section class="row text-center placeholders">
            <div class="col-6 col-sm-3 placeholder" style="width: 100%">
              <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th colspan="2">BTC Buy</th>
        <th colspan="2">BTC Sell</th>
      </tr>
      <tr>
        <th>Type</th>
        <th>Value</th>
        <th>Type</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody class="table-hover table-bordered table">
      <tr>
        <td>Coin Bought</td>
        <td>{{btcTicker.coinBought}}</td>
        <td>Koinex Sell Amount</td>
        <td>{{btcTicker.koinexSellAmount}}</td>
      </tr>
      <tr>
        <td>Coin After Transfer</td>
        <td>{{btcTicker.coinFinalAmount}}</td>
        <td>Profit (INR)</td>
        <td>{{btcTicker.profit}}</td>
      </tr>
    </tbody>
  </table>
            </div>
          </section>



          <div class="panel panel-default darkbackground">
            <div class="panel-body centerAlign">ETH Buy/Transfer</div>
          </div>

          <section class="row text-center placeholders">
            <div class="col-6 col-sm-3 placeholder" style="width: 100%">
              <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th colspan="2">ETH Buy</th>
        <th colspan="2">ETH Sell</th>
      </tr>
      <tr>
        <th>Type</th>
        <th>Value</th>
        <th>Type</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody class="table-hover table-bordered table">
      <tr>
        <td>Coin Bought</td>
        <td>{{ethTicker.coinBought}}</td>
        <td>Koinex Sell Amount</td>
        <td>{{ethTicker.koinexSellAmount}}</td>
      </tr>
      <tr>
        <td>Coin After Transfer</td>
        <td>{{ethTicker.coinFinalAmount}}</td>
        <td>Profit (INR)</td>
        <td>{{ethTicker.profit}}</td>
      </tr>
    </tbody>
  </table>
            </div>
          </section>


          <div class="panel panel-default darkbackground">
            <div class="panel-body centerAlign">XRP Buy/Transfer</div>
          </div>

          <section class="row text-center placeholders">
            <div class="col-6 col-sm-3 placeholder" style="width: 100%">
              <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th colspan="2">XRP Buy</th>
        <th colspan="2">XRP Sell</th>
      </tr>
      <tr>
        <th>Type</th>
        <th>Value</th>
        <th>Type</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody class="table-hover table-bordered table">
      <tr>
        <td>Coin Bought</td>
        <td>{{xrpTicker.coinBought}}</td>
        <td>Koinex Sell Amount</td>
        <td>{{xrpTicker.koinexSellAmount}}</td>
      </tr>
      <tr>
        <td>Coin After Transfer</td>
        <td>{{xrpTicker.coinFinalAmount}}</td>
        <td>Profit (INR)</td>
        <td>{{xrpTicker.profit}}</td>
      </tr>
    </tbody>
  </table>
            </div>
          </section>


          <div class="panel panel-default darkbackground">
            <div class="panel-body centerAlign">BCH Buy/Transfer</div>
          </div>

          <section class="row text-center placeholders">
            <div class="col-6 col-sm-3 placeholder" style="width: 100%">
              <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th colspan="2">BCH Buy</th>
        <th colspan="2">BCH Sell</th>
      </tr>
      <tr>
        <th>Type</th>
        <th>Value</th>
        <th>Type</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody class="table-hover table-bordered table">
      <tr>
        <td>Coin Bought</td>
        <td>{{bchTicker.coinBought}}</td>
        <td>Koinex Sell Amount</td>
        <td>{{bchTicker.koinexSellAmount}}</td>
      </tr>
      <tr>
        <td>Coin After Transfer</td>
        <td>{{bchTicker.coinFinalAmount}}</td>
        <td>Profit (INR)</td>
        <td>{{bchTicker.profit}}</td>
      </tr>
    </tbody>
  </table>
            </div>
          </section>
          <!-- <h1>Cryptassests</h1>

          <section class="row text-center placeholders">
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <div class="text-muted">Something else</div>
            </div>
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
            <div class="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" class="img-fluid rounded-circle" alt="Generic placeholder thumbnail">
              <h4>Label</h4>
              <span class="text-muted">Something else</span>
            </div>
          </section> -->
<!-- 
          <h2>Section title</h2>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>amet</td>
                  <td>consectetur</td>
                  <td>adipiscing</td>
                  <td>elit</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>Integer</td>
                  <td>nec</td>
                  <td>odio</td>
                  <td>Praesent</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>libero</td>
                  <td>Sed</td>
                  <td>cursus</td>
                  <td>ante</td>
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>dapibus</td>
                  <td>diam</td>
                  <td>Sed</td>
                  <td>nisi</td>
                </tr>
                <tr>
                  <td>1,005</td>
                  <td>Nulla</td>
                  <td>quis</td>
                  <td>sem</td>
                  <td>at</td>
                </tr>
                <tr>
                  <td>1,006</td>
                  <td>nibh</td>
                  <td>elementum</td>
                  <td>imperdiet</td>
                  <td>Duis</td>
                </tr>
                <tr>
                  <td>1,007</td>
                  <td>sagittis</td>
                  <td>ipsum</td>
                  <td>Praesent</td>
                  <td>mauris</td>
                </tr>
                <tr>
                  <td>1,008</td>
                  <td>Fusce</td>
                  <td>nec</td>
                  <td>tellus</td>
                  <td>sed</td>
                </tr>
                <tr>
                  <td>1,009</td>
                  <td>augue</td>
                  <td>semper</td>
                  <td>porta</td>
                  <td>Mauris</td>
                </tr>
                <tr>
                  <td>1,010</td>
                  <td>massa</td>
                  <td>Vestibulum</td>
                  <td>lacinia</td>
                  <td>arcu</td>
                </tr>
                <tr>
                  <td>1,011</td>
                  <td>eget</td>
                  <td>nulla</td>
                  <td>Class</td>
                  <td>aptent</td>
                </tr>
                <tr>
                  <td>1,012</td>
                  <td>taciti</td>
                  <td>sociosqu</td>
                  <td>ad</td>
                  <td>litora</td>
                </tr>
                <tr>
                  <td>1,013</td>
                  <td>torquent</td>
                  <td>per</td>
                  <td>conubia</td>
                  <td>nostra</td>
                </tr>
                <tr>
                  <td>1,014</td>
                  <td>per</td>
                  <td>inceptos</td>
                  <td>himenaeos</td>
                  <td>Curabitur</td>
                </tr>
                <tr>
                  <td>1,015</td>
                  <td>sodales</td>
                  <td>ligula</td>
                  <td>in</td>
                  <td>libero</td>
                </tr>
              </tbody>
            </table>
          </div>

           -->
        </main>
      <!-- </div>
    </div> -->
  </div>
</template>

<script>
import { to2DecimalPlaces, to3DecimalPlaces } from '~/utils/common'

export default {
  mounted () {
    this.$store.dispatch('priceticker/getInitialDiff', {}).then(response => {
      if (response && response.data) {
        this.indianMoneySetter (response.data.indianMoney)
        this.koinexTickerSetter (response.data.koinexTicker)
        this.ethTickerSetter (response.data.ethTicker)
        this.btcTickerSetter (response.data.btcTicker)
        this.xrpTickerSetter (response.data.xrpTicker)
        this.bchTickerSetter (response.data.bchTicker)
      } 
    })
  },
  data () {
    return {
      euroToInr: '',
      inputInr: 100000,
      indianMoney: {},
      koinexTicker: {},
      ethTicker: {},
      btcTicker: {},
      xrpTicker: {},
      bchTicker: {}
    }
  },
  methods: {
    recalculate () {
      this.indianMoneySetter()
      this.ethTickerSetter()
      this.btcTickerSetter()
      this.xrpTickerSetter()
      this.bchTickerSetter()
    },
    indianMoneySetter (response) {
      let indianBankTaxPercent = 0
      let euroToInr = 0
      let cexTax = 0
      let makerFeeCex = 0
      if (response) {
        indianBankTaxPercent = response.indianBankTax
        euroToInr = response.euroToInr
        cexTax = response.cexTax
        makerFeeCex = response.makerFeeCex
      } else {
        indianBankTaxPercent = this.indianMoney.indianBankTaxPercent
        euroToInr = this.indianMoney.euroToInr
        cexTax = this.indianMoney.cexTax
        makerFeeCex = this.indianMoney.makerFeeCex
      }
      let indianMoney = {}
      indianMoney['indianBankTaxPercent'] = indianBankTaxPercent
      indianMoney['euroToInr'] = euroToInr
      indianMoney['cexTax'] = cexTax 
      indianMoney['makerFeeCex'] = makerFeeCex
      indianMoney['indianBankTax'] = to2DecimalPlaces(indianBankTaxPercent * this.inputInr)
      indianMoney['availableMoney'] = to2DecimalPlaces(this.inputInr * (1-indianBankTaxPercent))
      indianMoney['inputCexRawEur'] = to2DecimalPlaces(indianMoney['availableMoney']/euroToInr)
      indianMoney['cexTaxEur'] = to2DecimalPlaces(indianMoney['inputCexRawEur'] * cexTax)
      indianMoney['cexInputEur'] = to2DecimalPlaces(indianMoney['inputCexRawEur'] - indianMoney['cexTaxEur'])
      indianMoney['buyRequestFee'] = to2DecimalPlaces(indianMoney['cexInputEur'] * makerFeeCex)
      indianMoney['cexEurBalanceToBuy'] = to2DecimalPlaces(indianMoney['cexInputEur'] - indianMoney['buyRequestFee'])
      this.indianMoney = indianMoney
    },
    koinexTickerSetter (response) {
        this.koinexTicker = response
    },
    ethTickerSetter (response) {
        let coinCexPrice = 0
        let ethTransferFee = 0
        if (response) {
          coinCexPrice = response.coinCexPrice
          ethTransferFee = response.ethTransferFee
        } else {
          coinCexPrice = this.ethTicker.coinCexPrice
          ethTransferFee = this.ethTicker.ethTransferFee
        }


        let tickerObj = {}
        tickerObj['coinCexPrice'] = coinCexPrice
        tickerObj['ethTransferFee'] = ethTransferFee
        tickerObj['coinBought'] = to3DecimalPlaces((this.indianMoney['cexEurBalanceToBuy'])/coinCexPrice)
        tickerObj['coinFinalAmount'] = to3DecimalPlaces(tickerObj['coinBought'] - ethTransferFee)
        tickerObj['koinexSellAmount'] = to2DecimalPlaces(tickerObj['coinFinalAmount'] * this.koinexTicker.ETH)
        tickerObj['profit'] = to2DecimalPlaces(tickerObj['koinexSellAmount'] - this.inputInr)
        this.ethTicker = tickerObj
    },
    xrpTickerSetter (response) {
        let coinCexPrice = 0
        let xrpTransferFee = 0
        if (response) {
          coinCexPrice = response.coinCexPrice
          xrpTransferFee = response.xrpTransferFee
        } else {
          coinCexPrice = this.xrpTicker.coinCexPrice
          xrpTransferFee = this.xrpTicker.xrpTransferFee
        }


        let tickerObj = {}
        tickerObj['coinCexPrice'] = coinCexPrice
        tickerObj['xrpTransferFee'] = xrpTransferFee
        tickerObj['coinBought'] = to3DecimalPlaces((this.indianMoney['cexEurBalanceToBuy'])/coinCexPrice)
        tickerObj['coinFinalAmount'] = to3DecimalPlaces(tickerObj['coinBought'] - xrpTransferFee)
        tickerObj['koinexSellAmount'] = to2DecimalPlaces(tickerObj['coinFinalAmount'] * this.koinexTicker.XRP)
        tickerObj['profit'] = to2DecimalPlaces(tickerObj['koinexSellAmount'] - this.inputInr)
        this.xrpTicker = tickerObj
    },
    btcTickerSetter (response) {
        let coinCexPrice = 0
        let btcTransferFee = 0
        if (response) {
          coinCexPrice = response.coinCexPrice
          btcTransferFee = response.btcTransferFee
        } else {
          coinCexPrice = this.btcTicker.coinCexPrice
          btcTransferFee = this.btcTicker.btcTransferFee
        }

        let tickerObj = {}
        tickerObj['coinCexPrice'] = coinCexPrice
        tickerObj['btcTransferFee'] = btcTransferFee
        tickerObj['coinBought'] = to3DecimalPlaces((this.indianMoney['cexEurBalanceToBuy'])/coinCexPrice)
        tickerObj['coinFinalAmount'] = to3DecimalPlaces(tickerObj['coinBought'] - btcTransferFee)
        tickerObj['koinexSellAmount'] = to2DecimalPlaces(tickerObj['coinFinalAmount'] * this.koinexTicker.BTC)
        tickerObj['profit'] = to2DecimalPlaces(tickerObj['koinexSellAmount'] - this.inputInr)
        this.btcTicker = tickerObj
    },
    bchTickerSetter (response) {
        let coinCexPrice = 0
        let bchTransferFee = 0
        if (response) {
          coinCexPrice = response.coinCexPrice
          bchTransferFee = response.bchTransferFee
        } else {
          coinCexPrice = this.bchTicker.coinCexPrice
          bchTransferFee = this.bchTicker.bchTransferFee
        }

        let tickerObj = {}
        tickerObj['coinCexPrice'] = coinCexPrice
        tickerObj['bchTransferFee'] = bchTransferFee
        tickerObj['coinBought'] = to3DecimalPlaces((this.indianMoney['cexEurBalanceToBuy'])/coinCexPrice)
        tickerObj['coinFinalAmount'] = to3DecimalPlaces(tickerObj['coinBought'] - bchTransferFee)
        tickerObj['koinexSellAmount'] = to2DecimalPlaces(tickerObj['coinFinalAmount'] * this.koinexTicker.BCH)
        tickerObj['profit'] = to2DecimalPlaces(tickerObj['koinexSellAmount'] - this.inputInr)
        this.bchTicker = tickerObj
    },
  },
  components: {
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    indianMoney: function(response) {
      this.indianMoneySetter (response)
    },
    btcTicker: function(response) {
       this.btcTickerSetter (response)
    },
    ethTicker: function(response) {
        this.ethTickerSetter (response)
    },
    xrpTicker: function(response) {
        this.xrpTickerSetter (response)
    },
    bchTicker: function(response) {
        this.bchTickerSetter (response)
    },
    koinexTicker: function(response) {
        this.koinexTickerSetter (response)
    }
  }
}
</script>


<style>
.arbitrageHeading {
  text-align: center;
  font-size: large;
  color: white;
}
.centerAlign {
  text-align: center;
  font-size: large;
  color: white;
}
.darkbackground {
  background-color: grey;
}
.table th {
  text-align: center;
}
</style>