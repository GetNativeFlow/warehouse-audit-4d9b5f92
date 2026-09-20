import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_22cfca54_b262_4561_82e5_40a3d84c9855}>
              <View style={styles.node_1c83c1c6_b30c_4c99_ac9b_4c9bab142fa2}>
                        <Text style={styles.node_8e27343a_f514_45d1_9a73_7c7677cc20b1}>GOOD MORNING, R. CHEN 👋</Text>
                        <Text style={styles.node_7a3554d8_998e_45bf_8ee2_14446f0b4602}>Warehouse Audit</Text>
                        <Text style={styles.node_7d3d4ca4_8946_454c_a89f_7c2470f2dc71}>Sector 7 · Bay 12 · Shift A · 15 May 2026</Text>
              </View>
              <View style={styles.node_6f006c09_59b1_42e2_ac55_92c00e553d7a}>
                        <View style={styles.node_7b3c161f_8959_4538_a0a3_a0b6204fb403}>
                                    <View style={styles.node_9aa36271_c035_4afd_bb60_15daf7510c79}>
                                                  <Text style={styles.node_7ec21a9b_83a1_48f3_a535_f0139441d51e}>8</Text>
                                                  <Text style={styles.node_9059f5d2_e791_4d4b_bddd_30d400faa309}>ZONES</Text>
                                    </View>
                                    <View style={styles.node_a9eeeb77_a606_48bc_893d_f53f8c3d8db3}>
                                                  <Text style={styles.node_d16f4da2_e574_4b50_8b7b_ef082d48569a}>5</Text>
                                                  <Text style={styles.node_9c18ada3_de56_4beb_89d2_0478d5b318bd}>DONE</Text>
                                    </View>
                                    <View style={styles.node_1b47a772_15f4_488c_a510_e3e3f412491c}>
                                                  <Text style={styles.node_42f0d3f4_7bdb_4f15_98d3_498e95c5a922}>3</Text>
                                                  <Text style={styles.node_59bd475d_dcf7_4235_99a5_975e29916ccc}>ISSUES</Text>
                                    </View>
                                    <View style={styles.node_130c15a1_9ab5_4ca5_add8_34a17ad18494}>
                                                  <Text style={styles.node_ef655ef9_14db_4aa8_90a3_555d19f2189a}>84%</Text>
                                                  <Text style={styles.node_ea54394a_3ae6_4dc1_8ed0_ef89f4d4681e}>SCORE</Text>
                                    </View>
                        </View>
                        <Text style={styles.node_1802ee03_4a81_464b_a145_2c210f9686db}>ACTIVE ZONES</Text>
                        <View style={styles.node_fc3ade26_d6fd_42f1_a105_bd7e66ea177e}>
                                    <View style={styles.node_d9a2236d_946c_4699_b922_b76b0590fcc8}>
                                                  <View style={styles.node_a576ea11_c65c_4b75_a76b_e06de10ed133}>
                                                                  <View style={styles.node_253c785d_2f35_42a9_9a3a_5ad41e96b009}>
                                                                                    <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></Path><Rect width="20" height="14" x="2" y="6" rx="2"></Rect></G></Svg></View>
                                                                  </View>
                                                                  <View style={styles.node_1d8f41ef_529e_416f_a888_98310e6072dd}>
                                                                                    <View style={styles.node_5c437902_0f1f_41ac_8a4e_c22227042377}>
                                                                                                        <Text style={styles.node_e8b699f8_83cf_4c58_b7e6_2559f9bb108d}>Zone A · Receiving Dock</Text>
                                                                                                        <View style={styles.node_3fdfb6c7_f9e0_493c_8df3_cef9276529fc}>
                                                                                                                              <Text style={styles.node_256ea39b_04c7_418f_9666_d164ca0af3c2}>IN PROG</Text>
                                                                                                        </View>
                                                                                    </View>
                                                                                    <Text style={styles.node_32b5a8db_2dea_48f9_a3e0_c01dfd989e92}>12 checks · 3 flagged</Text>
                                                                  </View>
                                                  </View>
                                                  <View style={[styles.node_ed8f4603_c63a_49f9_8161_f8041303e85e, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                    <View style={{ width: '35%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                  </View>
                                    </View>
                        </View>
                        <View style={styles.node_3b9c7d60_18d3_4015_97ba_51cd787b4913}>
                                    <View style={styles.node_a1881f79_566e_4757_8f8c_7f4c27eed56d}>
                                                  <View style={styles.node_7854e2f7_155f_4f8a_9309_1fde74de1168}>
                                                                  <View style={styles.node_44bb7d4c_b156_4cea_aa5e_a90dc23ea9c6}>
                                                                                    <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#EF4444" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></Path><Path d="M12 9v4"></Path><Path d="M12 17h.01"></Path></G></Svg></View>
                                                                  </View>
                                                                  <View style={styles.node_38bf7431_5781_4b7d_a741_beb2e621a2f1}>
                                                                                    <View style={styles.node_5d815045_dab5_44f0_8eea_6b78ebd2824c}>
                                                                                                        <Text style={styles.node_442699ef_036b_4b7d_8760_205007f1300b}>Zone B · Cold Storage</Text>
                                                                                                        <View style={styles.node_9f902f80_32ff_45ea_b349_fdbba7145823}>
                                                                                                                              <Text style={styles.node_292fda9b_5ab2_4b50_a084_75ed6516bbbc}>ISSUE</Text>
                                                                                                        </View>
                                                                                    </View>
                                                                                    <Text style={styles.node_b6d98c64_dd8a_496c_9012_65b98056d34a}>8 checks · 2 critical</Text>
                                                                  </View>
                                                  </View>
                                                  <View style={[styles.node_c8ffb941_cc6b_4e65_ac7a_fa81362211f1, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                    <View style={{ width: '20%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                  </View>
                                    </View>
                        </View>
                        <View style={styles.node_a4b8c7b7_2ee5_439b_b600_56137b57f615}>
                                    <View style={styles.node_704c8cfd_f8dd_454b_a20b_94cad01ec6bd}>
                                                  <View style={styles.node_d144d34b_7c6a_402f_9a92_2e32a419bbaa}>
                                                                  <View style={styles.node_9fbbfdac_dc00_4fd6_b020_f6c75a495890}>
                                                                                    <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#22C55E" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></Path><Path d="m3.3 7 8.7 5 8.7-5"></Path><Path d="M12 22V12"></Path></G></Svg></View>
                                                                  </View>
                                                                  <View style={styles.node_530e246b_eede_41d4_ab0d_d107a0d6098f}>
                                                                                    <View style={styles.node_1a7855a2_32c1_46a1_a6c0_df7c73c8f68a}>
                                                                                                        <Text style={styles.node_de7b1df8_dfbf_4e9c_8c5b_579ba90c85dc}>Zone C · Dispatch Bay</Text>
                                                                                                        <View style={styles.node_77d1cf51_f47c_4e9b_8245_df34190477d1}>
                                                                                                                              <Text style={styles.node_e4aa98d3_59a2_4d86_8a06_71d80fea7e22}>DONE</Text>
                                                                                                        </View>
                                                                                    </View>
                                                                                    <Text style={styles.node_987e36d2_cf7f_4ac6_b1c2_ceb0d48af794}>10 checks · all clear</Text>
                                                                  </View>
                                                  </View>
                                                  <View style={[styles.node_ab98c129_0065_45ad_862d_fa50b71343ba, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                    <View style={{ width: '85%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                  </View>
                                    </View>
                        </View>
                        <View style={styles.node_947920b5_2a2b_43bc_94ce_7435e89f6791}>
                                    <View style={styles.node_73b6bc3a_2991_4985_b617_534e1c420310}>
                                                  <View style={styles.node_5c179963_0d1f_4a7a_9398_d37aefad38a7}>
                                                                  <View style={styles.node_0546576f_a0d0_4e38_aabf_d33f6034860b}>
                                                                                    <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#F59E0B" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></Path><Path d="M15 18H9"></Path><Path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></Path><Circle cx="17" cy="18" r="2"></Circle><Circle cx="7" cy="18" r="2"></Circle></G></Svg></View>
                                                                  </View>
                                                                  <View style={styles.node_781e8293_35ac_4201_b9da_fb8dddee0a25}>
                                                                                    <View style={styles.node_d8db7cad_2ec4_40ea_a77e_2f348546a326}>
                                                                                                        <Text style={styles.node_9fccd36f_53f8_4371_9ae2_45ab6dd95c4d}>Zone D · Heavy Equipment</Text>
                                                                                                        <View style={styles.node_62d9f46b_7c4b_41ed_beaf_a67e4efed865}>
                                                                                                                              <Text style={styles.node_de9d5cd7_50c4_4e53_afd6_792d8a58a9d9}>PENDING</Text>
                                                                                                        </View>
                                                                                    </View>
                                                                                    <Text style={styles.node_826c34ee_b295_4fef_ad48_127fe6130bc1}>15 checks · not started</Text>
                                                                  </View>
                                                  </View>
                                                  <View style={[styles.node_2d1608ca_7d24_44e2_b8d6_ad377d3eac50, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                                                    <View style={{ width: '60%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                                                  </View>
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
  node_22cfca54_b262_4561_82e5_40a3d84c9855: {
    gap: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_1c83c1c6_b30c_4c99_ac9b_4c9bab142fa2: {
    gap: 4,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  node_8e27343a_f514_45d1_9a73_7c7677cc20b1: {
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_7a3554d8_998e_45bf_8ee2_14446f0b4602: {
    color: '#111827',
    fontSize: 30,
    fontWeight: 'bold',
  },
  node_7d3d4ca4_8946_454c_a89f_7c2470f2dc71: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_6f006c09_59b1_42e2_ac55_92c00e553d7a: {
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
  node_7b3c161f_8959_4538_a0a3_a0b6204fb403: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    width: '100%',
  },
  node_9aa36271_c035_4afd_bb60_15daf7510c79: {
    gap: 6,
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
  node_7ec21a9b_83a1_48f3_a535_f0139441d51e: {
    color: '#3B82F6',
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_9059f5d2_e791_4d4b_bddd_30d400faa309: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_a9eeeb77_a606_48bc_893d_f53f8c3d8db3: {
    gap: 6,
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
  node_d16f4da2_e574_4b50_8b7b_ef082d48569a: {
    color: '#22C55E',
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_9c18ada3_de56_4beb_89d2_0478d5b318bd: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_1b47a772_15f4_488c_a510_e3e3f412491c: {
    gap: 6,
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
  node_42f0d3f4_7bdb_4f15_98d3_498e95c5a922: {
    color: '#EF4444',
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_59bd475d_dcf7_4235_99a5_975e29916ccc: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_130c15a1_9ab5_4ca5_add8_34a17ad18494: {
    gap: 6,
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
  node_ef655ef9_14db_4aa8_90a3_555d19f2189a: {
    color: '#F59E0B',
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_ea54394a_3ae6_4dc1_8ed0_ef89f4d4681e: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_1802ee03_4a81_464b_a145_2c210f9686db: {
    color: '#9CA3AF',
    fontWeight: '600',
    letterSpacing: 2,
    fontSize: 12,
  },
  node_fc3ade26_d6fd_42f1_a105_bd7e66ea177e: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":4,"shadowOpacity":0.06},
    boxShadow: '0px 2px 4px rgba(0,0,0,0.06)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  node_d9a2236d_946c_4699_b922_b76b0590fcc8: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_a576ea11_c65c_4b75_a76b_e06de10ed133: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_253c785d_2f35_42a9_9a3a_5ad41e96b009: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_1d8f41ef_529e_416f_a888_98310e6072dd: {
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
  node_5c437902_0f1f_41ac_8a4e_c22227042377: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_e8b699f8_83cf_4c58_b7e6_2559f9bb108d: {
    color: '#111827',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_3fdfb6c7_f9e0_493c_8df3_cef9276529fc: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#EFF6FF',
  },
  node_256ea39b_04c7_418f_9666_d164ca0af3c2: {
    color: '#3B82F6',
    fontWeight: '700',
    fontSize: 12,
  },
  node_32b5a8db_2dea_48f9_a3e0_c01dfd989e92: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_ed8f4603_c63a_49f9_8161_f8041303e85e: {
    color: '#3B82F6',
  },
  node_3b9c7d60_18d3_4015_97ba_51cd787b4913: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":4,"shadowOpacity":0.06},
    boxShadow: '0px 2px 4px rgba(0,0,0,0.06)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  node_a1881f79_566e_4757_8f8c_7f4c27eed56d: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_7854e2f7_155f_4f8a_9309_1fde74de1168: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_44bb7d4c_b156_4cea_aa5e_a90dc23ea9c6: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FEF2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_38bf7431_5781_4b7d_a741_beb2e621a2f1: {
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
  node_5d815045_dab5_44f0_8eea_6b78ebd2824c: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_442699ef_036b_4b7d_8760_205007f1300b: {
    color: '#111827',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_9f902f80_32ff_45ea_b349_fdbba7145823: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#FEF2F2',
  },
  node_292fda9b_5ab2_4b50_a084_75ed6516bbbc: {
    color: '#EF4444',
    fontWeight: '700',
    fontSize: 12,
  },
  node_b6d98c64_dd8a_496c_9012_65b98056d34a: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_c8ffb941_cc6b_4e65_ac7a_fa81362211f1: {
    color: '#EF4444',
  },
  node_a4b8c7b7_2ee5_439b_b600_56137b57f615: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":4,"shadowOpacity":0.06},
    boxShadow: '0px 2px 4px rgba(0,0,0,0.06)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  node_704c8cfd_f8dd_454b_a20b_94cad01ec6bd: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_d144d34b_7c6a_402f_9a92_2e32a419bbaa: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_9fbbfdac_dc00_4fd6_b020_f6c75a495890: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_530e246b_eede_41d4_ab0d_d107a0d6098f: {
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
  node_1a7855a2_32c1_46a1_a6c0_df7c73c8f68a: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_de7b1df8_dfbf_4e9c_8c5b_579ba90c85dc: {
    color: '#111827',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_77d1cf51_f47c_4e9b_8245_df34190477d1: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#F0FDF4',
  },
  node_e4aa98d3_59a2_4d86_8a06_71d80fea7e22: {
    color: '#22C55E',
    fontWeight: '700',
    fontSize: 12,
  },
  node_987e36d2_cf7f_4ac6_b1c2_ceb0d48af794: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_ab98c129_0065_45ad_862d_fa50b71343ba: {
    color: '#22C55E',
  },
  node_947920b5_2a2b_43bc_94ce_7435e89f6791: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":4,"shadowOpacity":0.06},
    boxShadow: '0px 2px 4px rgba(0,0,0,0.06)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  node_73b6bc3a_2991_4985_b617_534e1c420310: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  node_5c179963_0d1f_4a7a_9398_d37aefad38a7: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_0546576f_a0d0_4e38_aabf_d33f6034860b: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFFBEB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_781e8293_35ac_4201_b9da_fb8dddee0a25: {
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
  node_d8db7cad_2ec4_40ea_a77e_2f348546a326: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  node_9fccd36f_53f8_4371_9ae2_45ab6dd95c4d: {
    color: '#111827',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_62d9f46b_7c4b_41ed_beaf_a67e4efed865: {
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: '#FFFBEB',
  },
  node_de9d5cd7_50c4_4e53_afd6_792d8a58a9d9: {
    color: '#F59E0B',
    fontWeight: '700',
    fontSize: 12,
  },
  node_826c34ee_b295_4fef_ad48_127fe6130bc1: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_2d1608ca_7d24_44e2_b8d6_ad377d3eac50: {
    color: '#E5E7EB',
  },
});

