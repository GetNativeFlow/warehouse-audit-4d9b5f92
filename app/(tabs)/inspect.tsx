import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Inspect() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_6980cf62_3d3e_4bd5_b358_406111eece48}>
              <View style={styles.node_11b5161b_cdd0_482a_8366_00e59fe04637}>
                        <View style={styles.node_272fa91c_dc8f_435b_b623_b16d1a996b51}>
                                    <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#3B82F6" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m15 18-6-6 6-6"></Path></G></Svg></View>
                                    <Text style={styles.node_ac2bcf50_e159_41bc_9fce_91ebe40c80ef}>Dashboard</Text>
                        </View>
                        <View style={styles.node_a3c7e59c_a68c_4200_933a_7264b900afd8}>
                                    <Text style={styles.node_8f8f927a_536b_4f28_a7e4_f4aee16d5f43}>Zone A Inspection</Text>
                                    <View style={styles.node_8ff22b7a_8300_4ac1_81a9_9fa56c1a0e2f}>
                                                  <Text style={styles.node_0da46bff_847b_4895_a48d_e47a79a81083}>60%</Text>
                                    </View>
                        </View>
                        <Text style={styles.node_4074b211_ff29_455f_89ae_a0fde2d80134}>6 of 10 checked · Receiving Dock</Text>
                        <View style={[styles.node_39657709_e169_4552_a29d_5d201d0cd660, { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4 }]}>
                          <View style={{ width: '60%', height: 8, backgroundColor: '#3b82f6', borderRadius: 4 }} />
                        </View>
              </View>
              <View style={styles.node_ac7f27b0_1f2f_48be_abcb_719746b3b782}>
                        <View style={styles.node_d6606680_09bb_4b2e_887c_68b7524f880e}>
                                    <View style={styles.node_a86079af_3f0f_45b2_8b00_4a6585d7105f}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 6 9 17l-5-5"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_14d94515_c371_4402_a760_9e6449502f50}>
                                                  <Text style={styles.node_47209e15_a8c1_4f74_9ed3_6e7116ad2e7d}>Emergency exit paths clear and unobstructed</Text>
                                                  <Text style={styles.node_ec88b839_2950_49c3_803d_3d5b127f4757}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_3f4c7401_fc2b_46e3_ac4d_bfe9713847c9}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_c9e178c4_0c5b_4564_8bc3_9fc83f5413d9}>
                                    <View style={styles.node_7f3cb816_a3c9_4af7_8ae7_af0c810cb752}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 6 9 17l-5-5"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_cc7d3ac3_b12d_4483_b014_6c783d28e59c}>
                                                  <Text style={styles.node_24ffe953_0a79_4ce0_9520_c681474a809f}>Fire extinguishers mounted and in-date</Text>
                                                  <Text style={styles.node_15b39548_72bb_4652_bd8f_57043fe8f67b}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_7cafcb2b_64e0_4416_ac0b_20cb02bdf5c8}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_4bf6c362_dc32_492c_8d3d_db889559b187}>
                                    <View style={styles.node_d3933727_0343_4196_981d_7f3adf21cfb8}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 6 9 17l-5-5"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_bae37023_f86b_4c95_b14e_bd3ecaec084d}>
                                                  <Text style={styles.node_8576d626_cea1_4688_8175_a096a659bbcb}>First aid kit stocked and accessible</Text>
                                                  <Text style={styles.node_90b59497_54f6_43a3_947a_d39b852a3ee7}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_ca524e6b_5724_483b_8258_2800d8bfdb94}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_162079d2_1aed_4892_adfa_609a6fa72d73}>
                                    <View style={styles.node_d407cfec_a591_4527_84da_41512adb7aaf}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 6 9 17l-5-5"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_fb7f9e2f_ccbd_477f_83d1_c6036f99386b}>
                                                  <Text style={styles.node_85faaefe_f16d_4585_8169_db7164971700}>Forklift charging station clear of debris</Text>
                                                  <Text style={styles.node_9e9fabe1_491e_46de_af94_59673c873d51}>EQUIPMENT</Text>
                                    </View>
                                    <View style={styles.node_46c59101_6b50_466e_9011_2040d870d71c}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_77fde319_e8b5_4014_a0c3_40abf36380d7}>
                                    <View style={styles.node_d6cb51ce_0a0a_498d_8f58_4fa536d82096}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 6 9 17l-5-5"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_308ec74f_2888_4d24_8c60_e378696c0ef2}>
                                                  <Text style={styles.node_8faddadf_764b_48c9_8eab_91a60b595355}>Pallet racking load limits posted</Text>
                                                  <Text style={styles.node_136de795_1c45_455d_bddc_dfa03df20ab2}>STORAGE</Text>
                                    </View>
                                    <View style={styles.node_e079c5d7_69dd_4ccf_a0cb_12373ca662c9}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_4625ac14_85fe_48fd_9b51_8a4ee6c02e2a}>
                                    <View style={styles.node_ddbc566c_65bb_4f75_a82a_e91fa368517b}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M18 6 6 18"></Path><Path d="m6 6 12 12"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_2117c508_29ec_44c9_addd_ed4a479a64a5}>
                                                  <Text style={styles.node_0f521ea7_24b3_4e09_82fd_623f099673b3}>Hazardous materials stored correctly</Text>
                                                  <Text style={styles.node_0b83d21f_e160_4c30_8708_c13de1542e33}>HAZMAT</Text>
                                    </View>
                                    <View style={styles.node_daedda84_c6a4_43d4_97cd_9a303213e3f7}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_fd44ec9e_0406_4fb4_88a3_b2b65910610f}>
                                    <View style={styles.node_9474653a_5ef5_4ca4_ad62_24cf74e359ac}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle></G></Svg></View>
                                    </View>
                                    <View style={styles.node_eccb257c_8a64_407d_a85c_412f170040ac}>
                                                  <Text style={styles.node_689ed3a1_9aed_4feb_97af_6db99e910725}>Loading dock bay doors functional</Text>
                                                  <Text style={styles.node_0a4ed550_f34e_43b4_8ec3_56634789a7c4}>EQUIPMENT</Text>
                                    </View>
                                    <View style={styles.node_cdaf57a9_bc2f_4e45_a7b6_a298c22bc48c}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_19adf528_de61_45ba_b3d0_bef16dc9a653}>
                                    <View style={styles.node_18a0b760_da00_41d8_a033_826cc65bb7d7}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle></G></Svg></View>
                                    </View>
                                    <View style={styles.node_8bf79fb0_679a_40dc_ac28_7c2258301c1c}>
                                                  <Text style={styles.node_fd34fc6b_9a04_431b_984c_f9d764517050}>Floor markings visible and intact</Text>
                                                  <Text style={styles.node_2204aba6_effc_4db5_9d50_73e1b730dc16}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_b31812b4_ef94_458e_a45d_3cdd4f66a7cd}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_c5d902cf_1877_4dbd_9954_1c74c4d333ed}>
                                    <View style={styles.node_218449ed_9447_48ec_9c72_aa3bb85dace9}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle></G></Svg></View>
                                    </View>
                                    <View style={styles.node_7ab2ee67_3d42_4e99_afac_38f623b13637}>
                                                  <Text style={styles.node_35094257_2f9e_4b64_8162_46520a810093}>Sprinkler system unobstructed</Text>
                                                  <Text style={styles.node_8ffe5c49_94f6_44ec_a60f_d3a00458ebde}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_ab20fce6_fd8c_4022_852b_c31934c7fc43}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                    </View>
                        </View>
                        <View style={styles.node_ed336c97_9519_4f04_9cab_eaa5ea08ad99}>
                                    <View style={styles.node_6bfc605c_5890_4bd2_a9b6_f4777dfd4b65}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle></G></Svg></View>
                                    </View>
                                    <View style={styles.node_9426bf0e_fe30_43e3_882f_006caa960d93}>
                                                  <Text style={styles.node_d35c307f_4b28_4313_a2f0_de3018d2c353}>PPE station stocked and labelled</Text>
                                                  <Text style={styles.node_51b3c329_ccfe_44b7_8be2_d499259023e8}>SAFETY</Text>
                                    </View>
                                    <View style={styles.node_0e9000a2_46e6_419d_82a0_9dacd9773feb}>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></Path><Line x1="4" x2="4" y1="22" y2="15"></Line></G></Svg></View>
                                    </View>
                        </View>
              </View>
              <View style={styles.node_b7c17f19_e0ed_4c3f_924c_8308157a7a06}>
                        <TouchableOpacity style={[styles.node_d7a399e6_1618_4abd_8c24_a95b1d522154, { backgroundColor: '#4338CA', borderRadius: 14, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                          <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>+ Flag Issue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.node_ab53b595_7ab8_4216_8d4b_0ab028458239, { backgroundColor: 'transparent', borderRadius: 14, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#0077E6', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                          <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#0077E6', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Summary</Text>
                        </TouchableOpacity>
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
  node_6980cf62_3d3e_4bd5_b358_406111eece48: {
    gap: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_11b5161b_cdd0_482a_8366_00e59fe04637: {
    gap: 8,
    paddingTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  node_272fa91c_dc8f_435b_b623_b16d1a996b51: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_ac2bcf50_e159_41bc_9fce_91ebe40c80ef: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_a3c7e59c_a68c_4200_933a_7264b900afd8: {
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_8f8f927a_536b_4f28_a7e4_f4aee16d5f43: {
    color: '#111827',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 0,
  },
  node_8ff22b7a_8300_4ac1_81a9_9fa56c1a0e2f: {
    paddingTop: 6,
    paddingLeft: 14,
    borderRadius: 20,
    paddingRight: 14,
    paddingBottom: 6,
    backgroundColor: '#EEF2FF',
  },
  node_0da46bff_847b_4895_a48d_e47a79a81083: {
    color: '#4338CA',
    fontWeight: '700',
    fontSize: 14,
  },
  node_4074b211_ff29_455f_89ae_a0fde2d80134: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_39657709_e169_4552_a29d_5d201d0cd660: {
    color: '#4338CA',
  },
  node_ac7f27b0_1f2f_48be_abcb_719746b3b782: {
    gap: 10,
    paddingTop: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 12,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_d6606680_09bb_4b2e_887c_68b7524f880e: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#86EFAC',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_a86079af_3f0f_45b2_8b00_4a6585d7105f: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_14d94515_c371_4402_a760_9e6449502f50: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_47209e15_a8c1_4f74_9ed3_6e7116ad2e7d: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_ec88b839_2950_49c3_803d_3d5b127f4757: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_3f4c7401_fc2b_46e3_ac4d_bfe9713847c9: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_c9e178c4_0c5b_4564_8bc3_9fc83f5413d9: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#86EFAC',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_7f3cb816_a3c9_4af7_8ae7_af0c810cb752: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_cc7d3ac3_b12d_4483_b014_6c783d28e59c: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_24ffe953_0a79_4ce0_9520_c681474a809f: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_15b39548_72bb_4652_bd8f_57043fe8f67b: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_7cafcb2b_64e0_4416_ac0b_20cb02bdf5c8: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_4bf6c362_dc32_492c_8d3d_db889559b187: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#86EFAC',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_d3933727_0343_4196_981d_7f3adf21cfb8: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_bae37023_f86b_4c95_b14e_bd3ecaec084d: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_8576d626_cea1_4688_8175_a096a659bbcb: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_90b59497_54f6_43a3_947a_d39b852a3ee7: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_ca524e6b_5724_483b_8258_2800d8bfdb94: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_162079d2_1aed_4892_adfa_609a6fa72d73: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#86EFAC',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_d407cfec_a591_4527_84da_41512adb7aaf: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_fb7f9e2f_ccbd_477f_83d1_c6036f99386b: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_85faaefe_f16d_4585_8169_db7164971700: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_9e9fabe1_491e_46de_af94_59673c873d51: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_46c59101_6b50_466e_9011_2040d870d71c: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_77fde319_e8b5_4014_a0c3_40abf36380d7: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#86EFAC',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_d6cb51ce_0a0a_498d_8f58_4fa536d82096: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_308ec74f_2888_4d24_8c60_e378696c0ef2: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_8faddadf_764b_48c9_8eab_91a60b595355: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_136de795_1c45_455d_bddc_dfa03df20ab2: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_e079c5d7_69dd_4ccf_a0cb_12373ca662c9: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_4625ac14_85fe_48fd_9b51_8a4ee6c02e2a: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#FECACA',
    borderWidth: 1.5,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FEF2F2',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_ddbc566c_65bb_4f75_a82a_e91fa368517b: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_2117c508_29ec_44c9_addd_ed4a479a64a5: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_0f521ea7_24b3_4e09_82fd_623f099673b3: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_0b83d21f_e160_4c30_8708_c13de1542e33: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_daedda84_c6a4_43d4_97cd_9a303213e3f7: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_fd44ec9e_0406_4fb4_88a3_b2b65910610f: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_9474653a_5ef5_4ca4_ad62_24cf74e359ac: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_eccb257c_8a64_407d_a85c_412f170040ac: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_689ed3a1_9aed_4feb_97af_6db99e910725: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_0a4ed550_f34e_43b4_8ec3_56634789a7c4: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_cdaf57a9_bc2f_4e45_a7b6_a298c22bc48c: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_19adf528_de61_45ba_b3d0_bef16dc9a653: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_18a0b760_da00_41d8_a033_826cc65bb7d7: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_8bf79fb0_679a_40dc_ac28_7c2258301c1c: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_fd34fc6b_9a04_431b_984c_f9d764517050: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_2204aba6_effc_4db5_9d50_73e1b730dc16: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_b31812b4_ef94_458e_a45d_3cdd4f66a7cd: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_c5d902cf_1877_4dbd_9954_1c74c4d333ed: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_218449ed_9447_48ec_9c72_aa3bb85dace9: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_7ab2ee67_3d42_4e99_afac_38f623b13637: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_35094257_2f9e_4b64_8162_46520a810093: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_8ffe5c49_94f6_44ec_a60f_d3a00458ebde: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_ab20fce6_fd8c_4022_852b_c31934c7fc43: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_ed336c97_9519_4f04_9cab_eaa5ea08ad99: {
    gap: 12,
    paddingTop: 14,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 16,
    paddingRight: 14,
    paddingBottom: 14,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_6bfc605c_5890_4bd2_a9b6_f4777dfd4b65: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_9426bf0e_fe30_43e3_882f_006caa960d93: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_d35c307f_4b28_4313_a2f0_de3018d2c353: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_51b3c329_ccfe_44b7_8be2_d499259023e8: {
    color: '#9CA3AF',
    letterSpacing: 1,
    fontSize: 12,
  },
  node_0e9000a2_46e6_419d_82a0_9dacd9773feb: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_b7c17f19_e0ed_4c3f_924c_8308157a7a06: {
    gap: 12,
    paddingTop: 16,
    borderColor: '#E5E7EB',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  node_d7a399e6_1618_4abd_8c24_a95b1d522154: {
    borderRadius: 14,
    backgroundColor: '#4338CA',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_ab53b595_7ab8_4216_8d4b_0ab028458239: {
    borderRadius: 14,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
});

