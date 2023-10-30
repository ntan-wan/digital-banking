<script setup>
import heroImg from '@/assets/imgs/hero.png';
import { useMq } from 'vue3-mq';

const mq = useMq();
</script>

<template>
  <div class="container px-3">
    <section>
      <h3 class="text-center">Digital Banking</h3>
      <p class="mt-3 color-subtitle text-center text-xl">
        Unlock cross-border opportunities and reach new international markets.
      </p>
      <p class="color-subtitle text-center text-xl">
        Create a global account with access from Singapore, the UK, Hong Kong,
        Indonesia and more.
      </p>
      <div class="flex justify-content-center align-items-center">
        <HeroImage />
      </div>
      <Card style="margin-top: 3.62rem">
        <template #content>
          <div class="flex flex-column md:flex-row">
            <div>
              <h6 class="h7">Centralised Account</h6>
              <p class="mt-3 text-xs">
                Access and manage your business finances on the go. Move money
                and track transactions with MEYZER360.
              </p>
            </div>
            <Divider layout="vertical" style="margin: 0 1.5rem" />
            <div>
              <h6 class="h7">Global Treasury</h6>
              <p class="mt-3 text-xs">
                Smoothly manage cashflow and bolster your competitive advantage
                in local markets by paying and receiving money in local
                currency.
              </p>
            </div>
            <Divider layout="vertical" style="margin: 0 1.5rem" />
            <div>
              <h6 class="h7">Zero Hidden Fees</h6>
              <p class="mt-3 text-xs">
                Get access to free virtual accounts in Singapore, the United
                Kingdom, Hong Kong and more. Hold up to 34 currencies in your
                global account for payments and collections.
              </p>
            </div>
            <Divider layout="vertical" style="margin: 0 1.5rem" />
            <div>
              <h6 class="h7">Local Support</h6>
              <p class="mt-3 text-xs">
                Receive full support from our local success teams at every step
                of the process.
              </p>
            </div>
          </div>
        </template>
      </Card>
    </section>

    <section style="margin-top: 4.25rem">
      <h4 class="font-semibold text-center">
        Grow beyond borders with MEYZER360 <br />
        Business Account
      </h4>
      <p class="mt-3 text-center text-xl">
        Business Account, Global Account, Corporate Cards - all in one play form
        platform. MEYZER360 offers everything you need to simplify your global
        payments and financial operations.
      </p>

      <div class="mt-7">
        <h6>Business Account</h6>
        <p class="mt-2">“business account copy right”</p>
        <Card class="mt-2">
          <template #content>
            <div class="flex flex-column md:flex-row">
              <div class="mr-4">img</div>
              <div class="w-full md:w-8">
                <h6 class="h7">Business account title</h6>
                <p class="mt-2">“business account copy right”</p>
              </div>
              <Divider v-if="mq.xs || mq.sm" style="margin: 1.5rem 0" />
              <Divider v-else layout="vertical" style="margin: 0 1.5rem" />
              <h6 class="w-4 color-secondary font-semibold">FREE</h6>
            </div>
            <div class="mt-8 flex flex-column md:flex-row">
              <div class="mr-4">img</div>
              <div class="w-full md:w-8">
                <h6 class="h7">Business account title</h6>
                <p class="mt-2">“business account copy right”</p>
              </div>
              <Divider v-if="mq.xs || mq.sm" style="margin: 1.5rem 0" />
              <Divider v-else layout="vertical" style="margin: 0 1.5rem" />
              <h6 class="w-4 color-secondary font-semibold">FREE</h6>
            </div>
          </template>
        </Card>
      </div>

      <div class="mt-8">
        <h6>Global Account</h6>
        <p class="mt-2">
          Open domestic and foreign currency online in minutes.
        </p>
        <Card class="mt-2">
          <template #content>
            <div class="flex flex-column md:flex-row">
              <div class="mr-4"><CurrencyIcon /></div>
              <div class="w-full md:w-8">
                <h6 class="h7">Foreign and domestic currency accounts</h6>
                <p class="mt-2">
                  Open currency accounts with unique account detail around the
                  world in 12 currencies including USD, GBP, EUR, AUD, CNY, HKD
                  and CAD.
                </p>
              </div>
              <Divider v-if="mq.xs || mq.sm" style="margin: 1.5rem 0" />
              <Divider v-else layout="vertical" style="margin: 0 1.5rem" />
              <h6 class="w-4 color-secondary font-semibold">FREE</h6>
            </div>
            <div class="mt-8 flex flex-column md:flex-row">
              <div class="mr-4"><WalletIcon /></div>
              <div class="w-full md:w-8">
                <h6 class="h7">Multi-currency wallet</h6>
                <p class="mt-2">
                  Hold over 20 currencies in your digital wallet and hedge
                  against market fluctuations.
                </p>
              </div>
              <Divider v-if="mq.xs || mq.sm" style="margin: 1.5rem 0" />
              <Divider v-else layout="vertical" style="margin: 0 1.5rem" />
              <div class="w-4">
                <h6 style="flex-grow: 1" class="color-secondary font-semibold">
                  FREE
                </h6>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <div class="mt-8">
        <h6>Corporate Cards</h6>
        <p class="mt-2">
          Pay in multiple currencies and track spending in real time.
        </p>
        <Card class="mt-2">
          <template #content>
            <div class="flex flex-column md:flex-row">
              <div class="mr-4"><CardIcon /></div>
              <div class="w-full md:w-8">
                <h6 class="h7">Company Cards</h6>
                <p class="mt-2">
                  Multi-currency virtual cards with no international transaction
                  fees
                </p>
              </div>
              <Divider v-if="mq.xs || mq.sm" style="margin: 1.5rem 0" />
              <Divider v-else layout="vertical" style="margin: 0 1.5rem" />
              <div class="w-full md:w-4">
                <h6 class="color-secondary font-semibold">FREE</h6>
                <p class="mt-2">For all cardholders</p>
              </div>
            </div>
            <div class="mt-8 flex flex-column md:flex-row">
              <div class="mr-4"><CardEmployeeIcon /></div>
              <div class="w-full md:w-8">
                <h6 class="h7">Employee Cards</h6>
                <p class="mt-2">
                  Physical and virtual cards (compatible with Apply Pay and
                  Google Pay) integrated with MEYZER360 Expenses
                </p>
              </div>
              <Divider v-if="mq.xs || mq.sm" style="margin: 1.5rem 0" />
              <Divider v-else layout="vertical" style="margin: 0 1.5rem" />
              <div class="w-4">
                <h6 class="color-secondary font-semibold">FREE</h6>
              </div>
            </div>
            <div class="mt-8 flex flex-column md:flex-row">
              <div class="mr-4"><BadgeIcon /></div>
              <div class="w-full md:w-8">
                <h6 class="h7">Expense Management</h6>
                <p class="mt-2">
                  Manage employee expenses, with receipt capture and approvals
                  tools integrated with your accounting software.
                </p>
              </div>
              <Divider v-if="mq.xs || mq.sm" style="margin: 1.5rem 0" />
              <Divider v-else layout="vertical" style="margin: 0 1.5rem" />

              <div class="w-full md:w-4">
                <h6 class="color-secondary font-semibold">5 SGD</h6>
                <p class="mt-2">Per cardholder per month</p>
              </div>
            </div>
          </template>
        </Card>
      </div>

      <div class="mt-8">
        <h6>Transfers & FX</h6>
        <p class="mt-2">
          Make faster, cheaper transfers across the globe. View full fee
          schedule
        </p>
        <Card class="mt-2">
          <template #content>
            <div class="flex flex-column md:flex-row">
              <div class="mr-4"><TransferIcon /></div>
              <div class="w-full md:w-8">
                <h6 class="h7">Transfers</h6>
                <p class="mt-2">
                  Send money globally with our lighting-fast transfers.
                </p>
              </div>
              <Divider v-if="mq.xs || mq.sm" style="margin: 1.5rem 0" />
              <Divider v-else layout="vertical" style="margin: 0 1.5rem" />
              <div class="w-full md:w-4">
                <h6 class="color-secondary font-semibold">FREE</h6>
                <p class="mt-2">For all cardholders</p>
                <h6 class="mt-3 color-secondary font-semibold">20-35 SGD</h6>
                <p class="mt-2">for SWIFT transfer method (SHA & OUR)</p>
              </div>
            </div>
            <div class="mt-8 flex flex-column md:flex-row">
              <div class="mr-4"><ConversionIcon /></div>
              <div class="w-full md:w-8">
                <h6 class="h7">FX Conversions</h6>
                <p class="mt-2">
                  Convert currencies at our market-leading rates
                </p>
              </div>
              <Divider v-if="mq.xs || mq.sm" style="margin: 1.5rem 0" />
              <Divider v-else layout="vertical" style="margin: 0 1.5rem" />
              <div class="w-full md:w-4">
                <h6 class="color-secondary font-semibold">0.4%</h6>
                <p class="mt-2">
                  above interbank exchange rates for USD, GBP, EUR, AUD, CNY,
                  HKD and CAD.
                </p>

                <h6 class="mt-3 color-secondary font-semibold">0.6%</h6>
                <p class="mt-2">
                  above interbank exchange rates for all other currencies.
                </p>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </section>

    <section
      class="mt-7 py-6 flex bg-subtle row-bleed-full flex flex-column md:flex-row row-gap-5"
    >
      <div>
        <h6 class="font-semibold">Ready to get started?</h6>
        <p class="mt-3 w-full md:w-10">
          Explore MEYZER360 payments, or create an account instantly and start
          accepting payments. You can also contact us to design a custom package
          for your business
        </p>
        <Button class="mt-4">
          <div class="flex align-items-center gap-2">
            <span class="font-medium">Start Now</span>
            <i class="pi pi-angle-right"></i>
          </div>
        </Button>
      </div>
      <div class="mr-0 md:mr-7">
        <div><PaymentIcon /></div>
        <h6 class="mt-3 h8">Always know what you pay</h6>
        <p class="mt-2 body-text-sm-regular">
          Integrated per-transaction pricing with no hidden fees.
        </p>
        <Button link class="mt-3 px-0 link">
          <div class="flex align-items-center gap-2">
            <span>Payment Details</span>
            <i class="pi pi-angle-right"></i>
          </div>
        </Button>
      </div>
      <div>
        <div><CodeIcon /></div>
        <h6 class="mt-3 h8">Start your integration</h6>
        <p class="mt-2 body-text-sm-regular">
          Get up and running with MEYZER360 in as little as 10 minutes
        </p>
        <Button link class="mt-3 px-0 link">
          <div class="flex align-items-center gap-2">
            <span>API reference</span>
            <i class="pi pi-angle-right"></i>
          </div>
        </Button>
      </div>
    </section>
    <Footer class="mt-6" />
  </div>
</template>
