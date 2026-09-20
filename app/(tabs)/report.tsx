import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Report() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_3a1c9dee_e440_4a4b_9ffe_7ac5d3dc1775}>
              <View style={styles.node_9cffa0af_0582_4ee3_8fcf_d480f565853c}>
                        <View style={styles.node_6b9f8c00_e440_4110_b6ab_b35ad98f9b76}>
                                    <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m15 18-6-6 6-6"></Path></G></Svg></View>
                                    <Text style={styles.node_cc6b9a22_48c3_43b7_bd20_63626776abff}>Dashboard</Text>
                        </View>
                        <Text style={styles.node_4de6f9eb_80a4_4ed5_b471_439dcbc5d9f7}>Audit Report</Text>
                        <Text style={styles.node_666ef519_142c_4aaf_b836_e507e99730f4}>Sector 7 · Shift A · 15 May 2026</Text>
              </View>
              <View style={styles.node_0a661d72_cb2c_436d_a968_e4331bff7ef1}>
                        <View style={styles.node_fcc2ab07_8326_43ee_beea_78b95dbe660d}>
                                    <View style={styles.node_5b602167_94ec_422c_b0b1_f5eeb6e33bf3}>
                                                  <Text style={styles.node_6517d5a0_04c5_48a0_a56f_a273615da81e}>84</Text>
                                                  <Text style={styles.node_300221cc_e64a_4f1d_91ce_48e7a01cd0cc}>/100</Text>
                                    </View>
                                    <View style={styles.node_d75c40f7_7ee1_4f39_b443_109ececb1c6e}>
                                                  <Text style={styles.node_ffb745b1_e3db_4076_a4f1_716791738004}>Compliance Score</Text>
                                                  <Text style={styles.node_66daf798_49b1_4212_b3a6_5b30c8d00735}>5 of 8 zones complete</Text>
                                                  <Text style={styles.node_ed669b73_900c_424d_b153_7e59038e81c6}>3 open issues pending</Text>
                                                  <View style={styles.node_f07dde24_9c45_4991_a4a6_4aea20e444fe}>
                                                                  <Text style={styles.node_4702d1a8_f67d_4490_b82a_96bf5cc473e8}>Shift A · 15 May 2026</Text>
                                                  </View>
                                    </View>
                        </View>
                        <View style={styles.node_9d4e2680_89a7_4d13_96d6_2c653d6a3c0b}>
                                    <View style={styles.node_61c243dd_6011_4ef8_81f7_4891b47c6a23}>
                                                  <Text style={styles.node_6a0ebbf0_860f_4ea4_94c5_d90ee985525d}>45</Text>
                                                  <Text style={styles.node_54f1a657_d5d0_4b4f_871e_7c28d3d91545}>TOTAL CHECKS</Text>
                                    </View>
                                    <View style={styles.node_691f659d_d0dc_4bc3_8835_bd81b065f101}>
                                                  <Text style={styles.node_f972ffce_21f5_474c_89f2_05f574512609}>38</Text>
                                                  <Text style={styles.node_ad1b3abe_7631_49b3_bb27_88764a8e1626}>PASSED</Text>
                                    </View>
                                    <View style={styles.node_821103cc_a4d0_4295_b4f4_569b848d0b21}>
                                                  <Text style={styles.node_97e83a79_e1ae_43b5_afa0_bddaccbb5d1f}>2</Text>
                                                  <Text style={styles.node_1333370e_6d40_4b83_82a7_1f1bc545af49}>CRITICAL</Text>
                                    </View>
                        </View>
                        <View style={styles.node_3133886b_c578_46a5_8293_bf52646fe89a}>
                                    <Text style={styles.node_302bfbff_f6b2_43c8_a293_53b64ef32774}>ZONE BREAKDOWN</Text>
                                    <View style={styles.node_c8b298b3_dcd1_4450_852f_0ed9c7f609ac}>
                                                  <Text style={styles.node_416ffadb_ee09_403d_a015_be739047f837}>Zone A · Receiving</Text>
                                                  <View style={styles.node_865d7b41_211c_4f63_a6d4_91cc0a213a49}>
                                                                  <View style={[styles.node_62d1c624_daa9_4109_9366_da23c31c98d8, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                                    <View style={{ width: '78%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                                  </View>
                                                  </View>
                                                  <Text style={styles.node_a784ac14_8b55_4e49_9cfd_9b2674e670bd}>78%</Text>
                                    </View>
                                    <View style={styles.node_36bcd41a_8a1f_4c7f_a4b3_12f079c178e2}>
                                                  <Text style={styles.node_c2cd8990_85e4_494b_95ce_6a78c1b3d77a}>Zone B · Cold Stor...</Text>
                                                  <View style={styles.node_aeb58c74_a5bd_43ac_b3a7_bc1aeb04cfec}>
                                                                  <View style={[styles.node_085e7c4f_41a2_46a6_89a3_c7747c1f4d9c, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                                    <View style={{ width: '62%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                                  </View>
                                                  </View>
                                                  <Text style={styles.node_d3a8b5e1_49ab_432f_b56b_5a2659445396}>62%</Text>
                                    </View>
                                    <View style={styles.node_b139d9d3_f0e3_4471_8bd2_aeaa7e53078a}>
                                                  <Text style={styles.node_8a47039e_ea3d_4bfc_8c70_b28ecad8aabd}>Zone C · Dispatch</Text>
                                                  <View style={styles.node_b5afd077_eb01_4a95_96f0_bf0d9d327530}>
                                                                  <View style={[styles.node_3ff64126_f510_4df7_bb64_c16640fd14db, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                                    <View style={{ width: '100%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                                  </View>
                                                  </View>
                                                  <Text style={styles.node_8a01e3e5_4af2_4dfc_91aa_7182093d26f4}>100%</Text>
                                    </View>
                                    <View style={styles.node_764144fa_97e2_414d_b4a6_59efa7dfe348}>
                                                  <Text style={styles.node_5bffba6c_664a_4f7c_a1f4_f38f77722b94}>Zone D · Equipment</Text>
                                                  <View style={styles.node_bfe3236c_fbef_41a5_915c_a67d7dcef0d5}>
                                                                  <View style={[styles.node_70612cf1_c80e_4f19_bb88_b70d64839575, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                                    <View style={{ width: '60%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                                  </View>
                                                  </View>
                                                  <Text style={styles.node_7d2fa80b_d7bd_4ca5_b827_9ee62dcc3560}>—</Text>
                                    </View>
                        </View>
                        <Text style={styles.node_d67c2dfd_ba6b_4607_87a3_4d9f9125dd23}>OPEN ISSUES</Text>
                        <View style={styles.node_cb90ee8d_2196_41be_9141_5371cb729b4c}>
                                    <View style={styles.node_eab45a68_48a9_4cab_8d0b_32e7a3a1d7f0} />
                                    <Text style={styles.node_35799e75_7caf_4871_a54c_13b1bbb7e326}>Cold storage temp alarm — Zone B</Text>
                                    <View style={styles.node_1aff8fcb_ebee_4165_815b_7afc50747039}>
                                                  <Text style={styles.node_d009b6e2_99b0_46a9_a751_c4c9190bd826}>CRITICAL</Text>
                                    </View>
                        </View>
                        <View style={styles.node_9f268cfa_3999_4506_93d2_7370742a78d5}>
                                    <View style={styles.node_7e622bfa_f23e_4656_996c_39f38eced681} />
                                    <Text style={styles.node_f54f5ddb_f9d1_4c5a_aad5_06a76931b5af}>Sprinkler blockage — Aisle 3</Text>
                                    <View style={styles.node_41638640_6e37_48a1_a63e_e2870f987d95}>
                                                  <Text style={styles.node_c533ea58_4994_41c8_a759_e0fbf24889ba}>CRITICAL</Text>
                                    </View>
                        </View>
                        <View style={styles.node_8a874145_6cb0_4db0_ae39_8737d5af1778}>
                                    <View style={styles.node_f1269e8c_e82d_45e4_be06_60899096fe4b} />
                                    <Text style={styles.node_83f893b6_2a94_4d1d_b7b2_67a60950de11}>Exit path blocked — Bay 7</Text>
                                    <View style={styles.node_72986cc1_85cf_4c4f_bce0_edd62e167a0a}>
                                                  <Text style={styles.node_7f503242_7218_465b_9050_935d03cbdfa7}>MEDIUM</Text>
                                    </View>
                        </View>
              </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#F1F3F9',
  },
  container: {
    flex: 1,
    backgroundColor: '#F1F3F9',
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
  },
  containerContent: {
    width: '100%',
    alignSelf: 'stretch',
  },
  node_3a1c9dee_e440_4a4b_9ffe_7ac5d3dc1775: {
    gap: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_9cffa0af_0582_4ee3_8fcf_d480f565853c: {
    gap: 4,
    paddingTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  node_6b9f8c00_e440_4110_b6ab_b35ad98f9b76: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_cc6b9a22_48c3_43b7_bd20_63626776abff: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_4de6f9eb_80a4_4ed5_b471_439dcbc5d9f7: {
    color: '#111827',
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_666ef519_142c_4aaf_b836_e507e99730f4: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_0a661d72_cb2c_436d_a968_e4331bff7ef1: {
    gap: 12,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_fcc2ab07_8326_43ee_beea_78b95dbe660d: {
    gap: 16,
    paddingTop: 20,
    paddingLeft: 20,
    borderRadius: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#4338CA',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_5b602167_94ec_422c_b0b1_f5eeb6e33bf3: {
    gap: 0,
    width: 88,
    height: 88,
    borderColor: '#7C6FE0',
    borderWidth: 2,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  node_6517d5a0_04c5_48a0_a56f_a273615da81e: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  node_300221cc_e64a_4f1d_91ce_48e7a01cd0cc: {
    color: '#C4B8F5',
    fontSize: 12,
  },
  node_d75c40f7_7ee1_4f39_b443_109ececb1c6e: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_ffb745b1_e3db_4076_a4f1_716791738004: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  node_66daf798_49b1_4212_b3a6_5b30c8d00735: {
    color: '#C4B8F5',
    fontSize: 12,
  },
  node_ed669b73_900c_424d_b153_7e59038e81c6: {
    color: '#C4B8F5',
    fontSize: 12,
  },
  node_f07dde24_9c45_4991_a4a6_4aea20e444fe: {
    paddingTop: 4,
    paddingLeft: 12,
    borderRadius: 20,
    paddingRight: 12,
    paddingBottom: 4,
    backgroundColor: '#3730A3',
  },
  node_4702d1a8_f67d_4490_b82a_96bf5cc473e8: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  node_9d4e2680_89a7_4d13_96d6_2c653d6a3c0b: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    width: '100%',
  },
  node_61c243dd_6011_4ef8_81f7_4891b47c6a23: {
    gap: 4,
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_6a0ebbf0_860f_4ea4_94c5_d90ee985525d: {
    color: '#111827',
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_54f1a657_d5d0_4b4f_871e_7c28d3d91545: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_691f659d_d0dc_4bc3_8835_bd81b065f101: {
    gap: 4,
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_f972ffce_21f5_474c_89f2_05f574512609: {
    color: '#22C55E',
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_ad1b3abe_7631_49b3_bb27_88764a8e1626: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_821103cc_a4d0_4295_b4f4_569b848d0b21: {
    gap: 4,
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_97e83a79_e1ae_43b5_afa0_bddaccbb5d1f: {
    color: '#EF4444',
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_1333370e_6d40_4b83_82a7_1f1bc545af49: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_3133886b_c578_46a5_8293_bf52646fe89a: {
    gap: 0,
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_302bfbff_f6b2_43c8_a293_53b64ef32774: {
    color: '#9CA3AF',
    fontWeight: '600',
    fontSize: 12,
  },
  node_c8b298b3_dcd1_4450_852f_0ed9c7f609ac: {
    gap: 10,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_416ffadb_ee09_403d_a015_be739047f837: {
    color: '#374151',
    width: 130,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  node_865d7b41_211c_4f63_a6d4_91cc0a213a49: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_62d1c624_daa9_4109_9366_da23c31c98d8: {
    color: '#3B82F6',
  },
  node_a784ac14_8b55_4e49_9cfd_9b2674e670bd: {
    color: '#3B82F6',
    minWidth: 44,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_36bcd41a_8a1f_4c7f_a4b3_12f079c178e2: {
    gap: 10,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_c2cd8990_85e4_494b_95ce_6a78c1b3d77a: {
    color: '#374151',
    width: 130,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  node_aeb58c74_a5bd_43ac_b3a7_bc1aeb04cfec: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_085e7c4f_41a2_46a6_89a3_c7747c1f4d9c: {
    color: '#EF4444',
  },
  node_d3a8b5e1_49ab_432f_b56b_5a2659445396: {
    color: '#EF4444',
    minWidth: 44,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_b139d9d3_f0e3_4471_8bd2_aeaa7e53078a: {
    gap: 10,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_8a47039e_ea3d_4bfc_8c70_b28ecad8aabd: {
    color: '#374151',
    width: 130,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  node_b5afd077_eb01_4a95_96f0_bf0d9d327530: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_3ff64126_f510_4df7_bb64_c16640fd14db: {
    color: '#22C55E',
  },
  node_8a01e3e5_4af2_4dfc_91aa_7182093d26f4: {
    color: '#22C55E',
    minWidth: 44,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_764144fa_97e2_414d_b4a6_59efa7dfe348: {
    gap: 10,
    paddingTop: 7,
    paddingBottom: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_5bffba6c_664a_4f7c_a1f4_f38f77722b94: {
    color: '#374151',
    width: 130,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  node_bfe3236c_fbef_41a5_915c_a67d7dcef0d5: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_70612cf1_c80e_4f19_bb88_b70d64839575: {
    color: '#E5E7EB',
  },
  node_7d2fa80b_d7bd_4ca5_b827_9ee62dcc3560: {
    color: '#9CA3AF',
    minWidth: 44,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_d67c2dfd_ba6b_4607_87a3_4d9f9125dd23: {
    color: '#9CA3AF',
    fontWeight: '600',
    fontSize: 12,
  },
  node_cb90ee8d_2196_41be_9141_5371cb729b4c: {
    gap: 10,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":1},"shadowRadius":3,"shadowOpacity":0.06},
    boxShadow: '0px 1px 3px rgba(0,0,0,0.06)',
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_eab45a68_48a9_4cab_8d0b_32e7a3a1d7f0: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444',
  },
  node_35799e75_7caf_4871_a54c_13b1bbb7e326: {
    color: '#111827',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_1aff8fcb_ebee_4165_815b_7afc50747039: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#FEF2F2',
  },
  node_d009b6e2_99b0_46a9_a751_c4c9190bd826: {
    color: '#EF4444',
    fontWeight: '700',
    fontSize: 12,
  },
  node_9f268cfa_3999_4506_93d2_7370742a78d5: {
    gap: 10,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":1},"shadowRadius":3,"shadowOpacity":0.06},
    boxShadow: '0px 1px 3px rgba(0,0,0,0.06)',
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_7e622bfa_f23e_4656_996c_39f38eced681: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444',
  },
  node_f54f5ddb_f9d1_4c5a_aad5_06a76931b5af: {
    color: '#111827',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_41638640_6e37_48a1_a63e_e2870f987d95: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#FEF2F2',
  },
  node_c533ea58_4994_41c8_a759_e0fbf24889ba: {
    color: '#EF4444',
    fontWeight: '700',
    fontSize: 12,
  },
  node_8a874145_6cb0_4db0_ae39_8737d5af1778: {
    gap: 10,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":1},"shadowRadius":3,"shadowOpacity":0.06},
    boxShadow: '0px 1px 3px rgba(0,0,0,0.06)',
    paddingTop: 14,
    paddingLeft: 14,
    borderRadius: 14,
    marginBottom: 24,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_f1269e8c_e82d_45e4_be06_60899096fe4b: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#F59E0B',
  },
  node_83f893b6_2a94_4d1d_b7b2_67a60950de11: {
    color: '#111827',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_72986cc1_85cf_4c4f_bce0_edd62e167a0a: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#FFF7ED',
  },
  node_7f503242_7218_465b_9050_935d03cbdfa7: {
    color: '#F59E0B',
    fontWeight: '700',
    fontSize: 12,
  },
});

